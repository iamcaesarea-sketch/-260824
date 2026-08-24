// Vercel Serverless Function — POST /api/save-review
// 사용자가 남긴 리뷰(별점·세부평가·리뷰 텍스트)를 Upstash Redis에 저장합니다.
// 별도 npm 패키지 없이 Upstash REST API를 fetch로 직접 호출합니다.
// 필요한 환경변수: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN

const REVIEWS_KEY = 'cinerec_reviews';

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'METHOD_NOT_ALLOWED' });
    return;
  }

  const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
  const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!REDIS_URL || !REDIS_TOKEN) {
    res.status(500).json({
      error: 'SERVER_MISCONFIGURED',
      message: 'UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN 환경변수가 설정되지 않았습니다.',
    });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  if (!body || typeof body !== 'object') {
    res.status(400).json({ error: 'BAD_REQUEST' });
    return;
  }

  const entry = {
    title: String(body.title || '').slice(0, 200),
    tmdbId: Number(body.tmdbId) || null,
    rating: Number(body.rating) || 0,
    aspects: body.aspects && typeof body.aspects === 'object' ? body.aspects : {},
    reviewText: String(body.reviewText || '').slice(0, 1000),
    lang: body.lang === 'en' ? 'en' : 'ko',
    createdAt: new Date().toISOString(),
  };

  try {
    const upstreamRes = await fetch(REDIS_URL, {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + REDIS_TOKEN, 'Content-Type': 'application/json' },
      body: JSON.stringify(['LPUSH', REVIEWS_KEY, JSON.stringify(entry)]),
    });
    if (!upstreamRes.ok) throw new Error('upstash error');
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(502).json({ error: 'UPSTREAM_ERROR', message: 'Redis 저장에 실패했습니다.' });
  }
};
