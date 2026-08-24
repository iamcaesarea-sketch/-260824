// Vercel Serverless Function — /api/tmdb
// TMDB_API_KEY는 절대 클라이언트로 내려가지 않고, 이 서버 함수 안에서만 사용됩니다.
// Vercel 프로젝트 설정 > Environment Variables 에 TMDB_API_KEY를 등록하세요.

const ALLOWED_PATH_PATTERNS = [
  /^\/search\/movie$/,
  /^\/discover\/movie$/,
  /^\/genre\/movie\/list$/,
  /^\/movie\/\d+$/,
  /^\/movie\/\d+\/credits$/,
  /^\/movie\/\d+\/external_ids$/,
  /^\/movie\/\d+\/watch\/providers$/,
  /^\/movie\/\d+\/keywords$/,
  /^\/movie\/\d+\/recommendations$/,
  /^\/search\/keyword$/,
];

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'METHOD_NOT_ALLOWED' });
    return;
  }

  const TMDB_KEY = process.env.TMDB_API_KEY;
  if (!TMDB_KEY) {
    res.status(500).json({
      error: 'SERVER_MISCONFIGURED',
      message: 'TMDB_API_KEY 환경변수가 설정되지 않았습니다. Vercel 프로젝트 설정에서 등록해 주세요.',
    });
    return;
  }

  const { path, ...rest } = req.query || {};
  if (!path || typeof path !== 'string') {
    res.status(400).json({ error: 'BAD_REQUEST', message: 'path 쿼리 파라미터가 필요합니다.' });
    return;
  }
  if (!ALLOWED_PATH_PATTERNS.some((re) => re.test(path))) {
    res.status(403).json({ error: 'FORBIDDEN_PATH', message: '허용되지 않은 TMDB 엔드포인트입니다.' });
    return;
  }

  const url = new URL('https://api.themoviedb.org/3' + path);
  url.searchParams.set('api_key', TMDB_KEY);
  url.searchParams.set('language', rest.language || 'ko-KR');
  Object.entries(rest).forEach(([k, v]) => {
    if (k !== 'language' && v !== undefined) url.searchParams.set(k, String(v));
  });

  try {
    const tmdbRes = await fetch(url.toString());
    const data = await tmdbRes.json();
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    res.status(tmdbRes.status).json(data);
  } catch (e) {
    res.status(502).json({ error: 'UPSTREAM_ERROR', message: 'TMDB 서버에 연결하지 못했습니다.' });
  }
};
