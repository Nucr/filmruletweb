import { fetchRandomMovie } from './tmdb.js';

const randomBtn = document.getElementById('randomBtn');
const loadingDiv = document.getElementById('loading');
const movieDiv = document.getElementById('movie');

randomBtn.addEventListener('click', async () => {
  loadingDiv.style.display = 'block';
  movieDiv.style.display = 'none';

  const checkedBoxes = document.querySelectorAll('.categories input:checked');
  const selectedGenres = Array.from(checkedBoxes).map(box => box.value);

  try {
    const movie = await fetchRandomMovie(selectedGenres);

    document.getElementById('title').textContent = movie.title;
    document.getElementById('year').textContent = `Yıl: ${movie.release_date ? movie.release_date.split('-')[0] : 'Bilinmiyor'}`;
    document.getElementById('overview').textContent = movie.overview || 'Açıklama yok.';
    document.getElementById('rating').querySelector('span').textContent = movie.vote_average.toFixed(1);

    const posterPath = movie.poster_path 
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : 'assets/images/placeholder.jpg';

    document.getElementById('poster').src = posterPath;
    document.getElementById('poster').alt = movie.title;

    movieDiv.style.display = 'block';
  } catch (err) {
    alert(err.message || 'Bir hata oldu kral, konsola bak!');
    console.error(err);
  } finally {
    loadingDiv.style.display = 'none';
  }
});