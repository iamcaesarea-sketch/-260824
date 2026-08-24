// Vercel Serverless Function — POST /api/admin-login
// 비밀번호를 URL에 노출하지 않고, 로그인 성공 시 HttpOnly 세션 쿠키를 발급합니다.
// 무차별 대입(brute-force) 방지를 위해 IP당 실패 횟수를 Upstash Redis에 기록해요.
// 필요한 환경변수: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN, ADMIN_PASSWORD

const crypto = require('crypto');

const SESSION_TTL_SECONDS = 60 * 60 * 24; // 24시간
const MAX_FAILS = 5;
const FAIL_WINDOW_SECONDS = 15 * 60; // 15분

async function redis(url, token, command) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
    body: JSON.stringify(command),
  });
  return res.json();
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  if (req.method === 'OPTIONS') { res.status(204).end(); return; }
  if (req.method !== 'POST') { res.status(405).json({ error: 'METHOD_NOT_ALLOWED' }); return; }

  const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
  const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  if (!REDIS_URL || !REDIS_TOKEN || !ADMIN_PASSWORD) {
    res.status(500).json({ error: 'SERVER_MISCONFIGURED' });
    return;
  }

  const ip = (req.headers['x-forwarded-for'] || 'unknown').split(',')[0].trim();
  const failKey = 'admin_fail:' + ip;

  try {
    const failCountRes = await redis(REDIS_URL, REDIS_TOKEN, ['GET', failKey]);
    const failCount = parseInt(failCountRes.result || '0', 10);
    if (failCount >= MAX_FAILS) {
      res.status(429).json({ error: 'TOO_MANY_ATTEMPTS', message: '너무 많이 틀렸어요. 잠시 후 다시 시도해 주세요.' });
      return;
    }

    let body = req.body;
    if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = {}; } }
    const password = body && body.password;

    if (password !== ADMIN_PASSWORD) {
      await redis(REDIS_URL, REDIS_TOKEN, ['INCR', failKey]);
      await redis(REDIS_URL, REDIS_TOKEN, ['EXPIRE', failKey, FAIL_WINDOW_SECONDS]);
      res.status(401).json({ error: 'UNAUTHORIZED' });
      return;
    }

    await redis(REDIS_URL, REDIS_TOKEN, ['DEL', failKey]);

    const token = crypto.randomBytes(32).toString('hex');
    await redis(REDIS_URL, REDIS_TOKEN, ['SET', 'admin_session:' + token, '1', 'EX', SESSION_TTL_SECONDS]);

    res.setHeader('Set-Cookie',
      `admin_session=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${SESSION_TTL_SECONDS}`);
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(502).json({ error: 'UPSTREAM_ERROR' });
  }
};
