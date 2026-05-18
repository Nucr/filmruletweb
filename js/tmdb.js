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

export async function fetchRandomMovie(genres = [], minRating = 0, years = null) {
  if (genres.length === 0) {
    throw new Error(t('errSelectCategory'));
  }

  const language = getLanguage();
  const country = getCountry();
  const genreString = genres.join(',');

  // Dönem (Yıl) Filtresi
  let dateQuery = '';
  if (years) {
    if (years.gte) dateQuery += `&primary_release_date.gte=${years.gte}`;
    if (years.lte) dateQuery += `&primary_release_date.lte=${years.lte}`;
  }

  try {
    // 1. ADIM: Bu kategorilerde kaç sayfa film var öğrenelim
    const discoverUrl = `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreString}&sort_by=popularity.desc&include_adult=false&vote_count.gte=100&vote_average.gte=${minRating}&page=1&language=${language}${dateQuery}`;

    let response = await fetch(discoverUrl);

    if (!response.ok) throw new Error(`TMDB API hatası: ${response.status}`);
    let data = await response.json();

    if (!data.total_pages) throw new Error('Bu kriterlerde film bulunamadı');

    const maxPages = data.total_pages > 500 ? 500 : data.total_pages;
    const randomPage = Math.floor(Math.random() * maxPages) + 1;

    // 2. ADIM: O sayfadaki filmleri çekelim
    response = await fetch(
      `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreString}&sort_by=popularity.desc&include_adult=false&vote_count.gte=100&vote_average.gte=${minRating}&page=${randomPage}&language=${language}${dateQuery}`
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