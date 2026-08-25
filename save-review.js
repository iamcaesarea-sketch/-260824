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

  // 세 티켓(모드) 각각 다른 모양의 데이터를 남겨요 — 관리자 페이지에서 mode로 구분해서 보여줍니다.
  const mode = body.mode === 'quiz' || body.mode === 'life' ? body.mode : 'similar';
  const lang = body.lang === 'en' ? 'en' : 'ko';
  let entry;

  if (mode === 'quiz') {
    // 모드 2: 나와 맞는 영화 찾기 (설문)
    entry = {
      mode: 'quiz',
      mood: typeof body.mood === 'string' ? body.mood.slice(0, 40) : null,
      runtime: body.runtime != null ? (Number(body.runtime) || null) : null,
      decade: body.decade === 'classic' ? 'classic' : (body.decade != null ? (Number(body.decade) || null) : null),
      results: Array.isArray(body.results) ? body.results.map((r) => String(r).slice(0, 200)).slice(0, 10) : [],
      lang,
      createdAt: new Date().toISOString(),
    };
  } else if (mode === 'life') {
    // 모드 3: 인생 영화를 통해 나에 대해 분석하기
    entry = {
      mode: 'life',
      pickedMovies: Array.isArray(body.pickedMovies) ? body.pickedMovies.map((m) => String(m).slice(0, 200)).slice(0, 10) : [],
      archetype: typeof body.archetype === 'string' ? body.archetype.slice(0, 40) : null,
      archetypeTitle: typeof body.archetypeTitle === 'string' ? body.archetypeTitle.slice(0, 40) : null,
      lang,
      createdAt: new Date().toISOString(),
    };
  } else {
    // 모드 1: 방금 본 영화와 비슷한 영화 찾기 (기존 리뷰 저장 방식)
    const filters = body.filters && typeof body.filters === 'object' ? body.filters : {};
    entry = {
      mode: 'similar',
      title: String(body.title || '').slice(0, 200),
      tmdbId: Number(body.tmdbId) || null,
      rating: Number(body.rating) || 0,
      aspects: body.aspects && typeof body.aspects === 'object' ? body.aspects : {},
      reviewText: String(body.reviewText || '').slice(0, 1000),
      lang,
      filters: {
        genres: Array.isArray(filters.genres) ? filters.genres.map((g) => String(g).slice(0, 40)).slice(0, 20) : [],
        runtime: filters.runtime != null ? (Number(filters.runtime) || null) : null,
        type: typeof filters.type === 'string' ? filters.type.slice(0, 20) : 'all',
        decade: filters.decade === 'classic' ? 'classic' : (filters.decade != null ? (Number(filters.decade) || null) : null),
      },
      createdAt: new Date().toISOString(),
    };
  }

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
