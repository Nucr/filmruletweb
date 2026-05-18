const TMDB_API_KEY = '4e3a069664d69bf8ca8a2fbc1ba52568';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// Dil kodları: TMDB language formatı
const LANG_MAP = {
  'tr': 'tr-TR',
  'en': 'en-US',
  'es': 'es-ES',
  'ru': 'ru-RU'
};

// Ülke kodları: Watch Providers için
const COUNTRY_MAP = {
  'tr': 'TR',
  'en': 'US',
  'es': 'ES',
  'ru': 'RU'
};

export function getLanguage() {
  const lang = localStorage.getItem('filmroulette-lang') || 'tr';
  return LANG_MAP[lang] || 'tr-TR';
}

export function getCountry() {
  const lang = localStorage.getItem('filmroulette-lang') || 'tr';
  return COUNTRY_MAP[lang] || 'TR';
}

import { t } from './i18n.js';

export async function fetchActorId(actorName) {
  if (!actorName || !actorName.trim()) return null;
  const language = getLanguage();
  const searchUrl = `${TMDB_BASE_URL}/search/person?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(actorName.trim())}&language=${language}`;
  try {
    const response = await fetch(searchUrl);
    if (!response.ok) return null;
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      return data.results[0].id;
    }
    return null;
  } catch (err) {
    console.error('Actor search error:', err);
    return null;
  }
}

export async function fetchActorSuggestions(query) {
  if (!query || query.trim().length < 2) return [];
  const language = getLanguage();
  const searchUrl = `${TMDB_BASE_URL}/search/person?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query.trim())}&language=${language}`;
  try {
    const response = await fetch(searchUrl);
    if (!response.ok) return [];
    const data = await response.json();
    return data.results || [];
  } catch (err) {
    console.error('Actor suggestions search error:', err);
    return [];
  }
}

function buildDiscoverParams(genres, minRating, years, actorId, originalLanguage) {
  let query = `&sort_by=popularity.desc&include_adult=false&vote_count.gte=100&vote_average.gte=${minRating}`;
  if (genres && genres.length > 0) {
    query += `&with_genres=${genres.join(',')}`;
  }
  if (years) {
    if (years.gte) query += `&primary_release_date.gte=${years.gte}`;
    if (years.lte) query += `&primary_release_date.lte=${years.lte}`;
  }
  if (actorId) {
    query += `&with_cast=${actorId}`;
  }
  if (originalLanguage && originalLanguage !== 'all') {
    query += `&with_original_language=${originalLanguage}`;
  }
  return query;
}

export async function fetchRandomMovie(genres = [], minRating = 0, years = null, actorId = null, originalLanguage = null) {
  if (genres.length === 0 && !actorId) {
    throw new Error(t('errSelectCategoryOrActor'));
  }

  const language = getLanguage();
  const country = getCountry();
  const filterParams = buildDiscoverParams(genres, minRating, years, actorId, originalLanguage);

  try {
    // 1. ADIM: Bu kategorilerde kaç sayfa film var öğrenelim
    const discoverUrl = `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&page=1&language=${language}${filterParams}`;

    let response = await fetch(discoverUrl);

    if (!response.ok) throw new Error(`TMDB API hatası: ${response.status}`);
    let data = await response.json();

    if (!data.total_pages) throw new Error(t('errNoMoviesFound') || 'Bu kriterlerde film bulunamadı');

    const maxPages = data.total_pages > 500 ? 500 : data.total_pages;
    const randomPage = Math.floor(Math.random() * maxPages) + 1;

    // 2. ADIM: O sayfadaki filmleri çekelim
    response = await fetch(
      `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&page=${randomPage}&language=${language}${filterParams}`
    );
    data = await response.json();

    const results = data.results;
    if (!results || results.length === 0) throw new Error('Bu sayfada film yok');

    const randomMovie = results[Math.floor(Math.random() * results.length)];

    // 3. ADIM: Film detayları + oyuncular + izleme platformları
    // Append videos to response for trailers
    const detailResponse = await fetch(
      `${TMDB_BASE_URL}/movie/${randomMovie.id}?api_key=${TMDB_API_KEY}&language=${language}&append_to_response=credits,watch/providers,videos`
    );
    const movieDetails = await detailResponse.json();

    // Watch providers'ı ülkeye göre filtrele
    if (movieDetails['watch/providers'] && movieDetails['watch/providers'].results) {
      const countryProviders = movieDetails['watch/providers'].results[country];
      movieDetails.watchProviders = countryProviders || null;
      movieDetails.watchProvidersLink = countryProviders?.link || null;
    }

    // Trailer (Video) bulma
    if (movieDetails.videos && movieDetails.videos.results) {
      // YouTube ve Type: Trailer olanı bul
      const trailer = movieDetails.videos.results.find(v => v.site === 'YouTube' && v.type === 'Trailer') ||
        movieDetails.videos.results.find(v => v.site === 'YouTube'); // Trailer yoksa herhangi bir video
      movieDetails.trailerKey = trailer ? trailer.key : null;
    }

    return movieDetails;
  } catch (error) {
    console.error('TMDB fetch hatası:', error);
    throw error;
  }
}