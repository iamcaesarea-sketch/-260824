// Vercel Serverless Function — GET /api/list-reviews
// 관리자 페이지(admin.html)에서 쌓인 리뷰 데이터를 조회할 때만 사용합니다.
// 비밀번호는 URL에 실리지 않고, /api/admin-login에서 발급한 세션 쿠키로 인증해요.
// 필요한 환경변수: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN

const REVIEWS_KEY = 'cinerec_reviews';

function parseCookie(header, name) {
  if (!header) return null;
  const match = header.split(';').map(s=>s.trim()).find(s=> s.startsWith(name+'='));
  return match ? match.slice(name.length+1) : null;
}

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
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'METHOD_NOT_ALLOWED' });
    return;
  }

  const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
  const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!REDIS_URL || !REDIS_TOKEN) {
    res.status(500).json({ error: 'SERVER_MISCONFIGURED' });
    return;
  }

  const token = parseCookie(req.headers.cookie, 'admin_session');
  if (!token) {
    res.status(401).json({ error: 'UNAUTHORIZED' });
    return;
  }

  try {
    const sessionCheck = await redis(REDIS_URL, REDIS_TOKEN, ['GET', 'admin_session:' + token]);
    if (!sessionCheck.result) {
      res.status(401).json({ error: 'UNAUTHORIZED' });
      return;
    }

    const listRes = await fetch(REDIS_URL + '/lrange/' + REVIEWS_KEY + '/0/-1', {
      headers: { Authorization: 'Bearer ' + REDIS_TOKEN },
    });
    const data = await listRes.json();
    const reviews = (data.result || [])
      .map((s) => { try { return JSON.parse(s); } catch (e) { return null; } })
      .filter(Boolean);
    res.status(200).json({ reviews });
  } catch (e) {
    res.status(502).json({ error: 'UPSTREAM_ERROR' });
  }
};
