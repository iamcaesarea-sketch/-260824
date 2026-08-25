// Vercel Serverless Function — POST /api/admin-logout
// 세션 쿠키를 무효화하고 브라우저의 쿠키도 지웁니다.

async function redis(url, token, command) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
    body: JSON.stringify(command),
  });
  return res.json();
}

function parseCookie(header, name) {
  if (!header) return null;
  const match = header.split(';').map(s=>s.trim()).find(s=> s.startsWith(name+'='));
  return match ? match.slice(name.length+1) : null;
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') { res.status(204).end(); return; }
  if (req.method !== 'POST') { res.status(405).json({ error: 'METHOD_NOT_ALLOWED' }); return; }

  const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
  const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
  const token = parseCookie(req.headers.cookie, 'admin_session');

  if (token && REDIS_URL && REDIS_TOKEN) {
    try { await redis(REDIS_URL, REDIS_TOKEN, ['DEL', 'admin_session:' + token]); } catch (e) {}
  }
  res.setHeader('Set-Cookie', 'admin_session=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0');
  res.status(200).json({ ok: true });
};
