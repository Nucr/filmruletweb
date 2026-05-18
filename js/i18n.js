// ═══════════════════════════════════════════
//              i18n — Çeviri Sistemi
// ═══════════════════════════════════════════

const translations = {
    tr: {
        // Navbar
        navHome: 'Ana Sayfa',
        navFavorites: 'Favoriler',
        navTrends: 'Trendler',
        navProfile: '👤 Profilim',
        navMyFavorites: '❤️ Favorilerim',
        navLogout: '🚪 Çıkış Yap',

        // Ana Sayfa
        pageTitle: '🎲 Film Ruleti',
        pageDesc: 'Kategori seç, butona bas, akşamın filmini bul!',
        categories: 'Kategoriler',
        randomBtn: 'Rastgele Film Bul! 🎲',
        loading: 'Patlamış Mısırlar Hazırlanıyor... 🍿',
        addFavorite: 'Favorilere Ekle ❤️',
        cast: 'Oyuncular',
        watchTitle: '📺 İzleme Platformları',
        watchAll: 'Tüm seçenekleri gör →',
        noDesc: 'Açıklama yok.',
        unknown: 'Bilinmiyor',

        // Kategoriler
        catAction: 'Aksiyon',
        catAdventure: 'Macera',
        catAnimation: 'Animasyon',
        catComedy: 'Komedi',
        catCrime: 'Suç',
        catDocumentary: 'Belgesel',
        catDrama: 'Dram',
        catFamily: 'Aile',
        catFantasy: 'Fantastik',
        catHistory: 'Tarih',
        catHorror: 'Korku',
        catMusic: 'Müzik',
        catMystery: 'Gizem',
        catRomance: 'Romantik',
        catSciFi: 'Bilim Kurgu',
        catThriller: 'Gerilim',
        catWar: 'Savaş',
        catWestern: 'Western',

        // Favoriler Sayfası
        favTitle: '❤️ Favori Filmlerim',
        favDesc: 'Beğendiğin filmlerin burada listeleniyor.',
        favEmpty: 'Henüz favori filmin yok',
        favEmptyDesc: "Film Ruleti'nden bir film çek ve favorilerine ekle!",
        favGoRoulette: "🎲 Film Ruleti'ne Git",
        favRemove: '🗑️ Kaldır',
        favConfirm: 'Bu filmi favorilerden kaldırmak istediğine emin misin?',
        favLoading: 'Yükleniyor...',
        favAdded: 'Favorilere eklendi! ❤️',

        // Hatalar
        errSelectCategory: 'En az bir kategori seç kral!',

        // Mood (Ruh Hali)
        moodLabel: 'Ruh Hali (Mood)',
        moodAny: 'Farketmez',
        moodHappy: '😂 Eğlenceli',
        moodSad: '😢 Duygusal',
        moodTense: '😬 Gergin',
        moodExcited: '🤩 Heyecanlı',
        moodChill: '😌 Sakin',

        // Dönem (Era)
        eraLabel: 'Dönem',
        eraAll: 'Tüm Zamanlar',
        eraOldies: 'Eskiler',

        // History
        historyTitle: '📜 Geçmiş',
        historyEmpty: 'Henüz bir film çekmedin.',

        // Action Buttons
        btnTrailer: 'Fragman',
        btnShare: 'Paylaş',
        btnSeen: 'İzledim',
    },

    en: {
        navHome: 'Home',
        navFavorites: 'Favorites',
        navTrends: 'Trends',
        navProfile: '👤 My Profile',
        navMyFavorites: '❤️ My Favorites',
        navLogout: '🚪 Log Out',

        pageTitle: '🎲 Movie Roulette',
        pageDesc: 'Pick a category, hit the button, find your next movie!',
        categories: 'Categories',
        randomBtn: 'Find Random Movie! 🎲',
        loading: 'Popcorn is Getting Ready... 🍿',
        addFavorite: 'Add to Favorites ❤️',
        cast: 'Cast',
        watchTitle: '📺 Watch Providers',
        watchAll: 'See all options →',
        noDesc: 'No description available.',
        unknown: 'Unknown',

        catAction: 'Action',
        catAdventure: 'Adventure',
        catAnimation: 'Animation',
        catComedy: 'Comedy',
        catCrime: 'Crime',
        catDocumentary: 'Documentary',
        catDrama: 'Drama',
        catFamily: 'Family',
        catFantasy: 'Fantasy',
        catHistory: 'History',
        catHorror: 'Horror',
        catMusic: 'Music',
        catMystery: 'Mystery',
        catRomance: 'Romance',
        catSciFi: 'Sci-Fi',
        catThriller: 'Thriller',
        catWar: 'War',
        catWestern: 'Western',

        favTitle: '❤️ My Favorite Movies',
        favDesc: 'Your liked movies are listed here.',
        favEmpty: "You don't have any favorites yet",
        favEmptyDesc: 'Spin the roulette and add movies to your favorites!',
        favGoRoulette: '🎲 Go to Movie Roulette',
        favRemove: '🗑️ Remove',
        favConfirm: 'Are you sure you want to remove this movie from favorites?',
        favLoading: 'Loading...',
        favAdded: 'Added to favorites! ❤️',

        // Mood
        moodLabel: 'Mood',
        moodAny: 'Any',
        moodHappy: '😂 Happy',
        moodSad: '😢 Sad',
        moodTense: '😬 Tense',
        moodExcited: '🤩 Excited',
        moodChill: '😌 Chill',

        // Era
        eraLabel: 'Era',
        eraAll: 'All Time',
        eraOldies: 'Oldies',

        // History
        historyTitle: '📜 History',
        historyEmpty: 'No movies found yet.',

        // Action Buttons
        btnTrailer: 'Trailer',
        btnShare: 'Share',
        btnSeen: 'Seen it',

        errSelectCategory: 'Select at least one category!',
    },

    es: {
        navHome: 'Inicio',
        navFavorites: 'Favoritos',
        navTrends: 'Tendencias',
        navProfile: '👤 Mi Perfil',
        navMyFavorites: '❤️ Mis Favoritos',
        navLogout: '🚪 Cerrar Sesión',

        pageTitle: '🎲 Ruleta de Películas',
        pageDesc: '¡Elige una categoría, presiona el botón y encuentra tu película!',
        categories: 'Categorías',
        randomBtn: '¡Buscar Película al Azar! 🎲',
        loading: 'Preparando Palomitas... 🍿',
        addFavorite: 'Añadir a Favoritos ❤️',
        cast: 'Reparto',
        watchTitle: '📺 Plataformas de Streaming',
        watchAll: 'Ver todas las opciones →',
        noDesc: 'Sin descripción disponible.',
        unknown: 'Desconocido',

        catAction: 'Acción',
        catAdventure: 'Aventura',
        catAnimation: 'Animación',
        catComedy: 'Comedia',
        catCrime: 'Crimen',
        catDocumentary: 'Documental',
        catDrama: 'Drama',
        catFamily: 'Familia',
        catFantasy: 'Fantasía',
        catHistory: 'Historia',
        catHorror: 'Terror',
        catMusic: 'Música',
        catMystery: 'Misterio',
        catRomance: 'Romance',
        catSciFi: 'Ciencia Ficción',
        catThriller: 'Suspenso',
        catWar: 'Guerra',
        catWestern: 'Western',

        favTitle: '❤️ Mis Películas Favoritas',
        favDesc: 'Tus películas favoritas se muestran aquí.',
        favEmpty: 'Aún no tienes favoritos',
        favEmptyDesc: '¡Gira la ruleta y añade películas a tus favoritos!',
        favGoRoulette: '🎲 Ir a la Ruleta',
        favRemove: '🗑️ Eliminar',
        favConfirm: '¿Estás seguro de que quieres eliminar esta película de favoritos?',
        favLoading: 'Cargando...',
        favAdded: '¡Añadido a favoritos! ❤️',

        // Mood
        moodLabel: 'Estado de Ánimo',
        moodAny: 'Cualquiera',
        moodHappy: '😂 Divertido',
        moodSad: '😢 Triste',
        moodTense: '😬 Tenso',
        moodExcited: '🤩 Emocionado',
        moodChill: '😌 Relajado',

        // Era
        eraLabel: 'Época',
        eraAll: 'Todos los tiempos',
        eraOldies: 'Clásicos',

        // History
        historyTitle: '📜 Historial',
        historyEmpty: 'Aún no has buscado películas.',

        // Action Buttons
        btnTrailer: 'Tráiler',
        btnShare: 'Compartir',
        btnSeen: 'Visto',

        errSelectCategory: '¡Selecciona al menos una categoría!',
    },

    ru: {
        navHome: 'Главная',
        navFavorites: 'Избранное',
        navTrends: 'Тренды',
        navProfile: '👤 Мой Профиль',
        navMyFavorites: '❤️ Моё Избранное',
        navLogout: '🚪 Выйти',

        pageTitle: '🎲 Киноролетка',
        pageDesc: 'Выбери категорию, нажми кнопку, найди свой фильм!',
        categories: 'Категории',
        randomBtn: 'Найти случайный фильм! 🎲',
        loading: 'Попкорн готовится... 🍿',
        addFavorite: 'Добавить в избранное ❤️',
        cast: 'Актёры',
        watchTitle: '📺 Где посмотреть',
        watchAll: 'Все варианты →',
        noDesc: 'Описание отсутствует.',
        unknown: 'Неизвестно',

        catAction: 'Боевик',
        catAdventure: 'Приключения',
        catAnimation: 'Мультфильм',
        catComedy: 'Комедия',
        catCrime: 'Криминал',
        catDocumentary: 'Документальный',
        catDrama: 'Драма',
        catFamily: 'Семейный',
        catFantasy: 'Фэнтези',
        catHistory: 'История',
        catHorror: 'Ужасы',
        catMusic: 'Музыка',
        catMystery: 'Детектив',
        catRomance: 'Мелодрама',
        catSciFi: 'Фантастика',
        catThriller: 'Триллер',
        catWar: 'Военный',
        catWestern: 'Вестерн',

        favTitle: '❤️ Мои Избранные Фильмы',
        favDesc: 'Здесь отображаются ваши любимые фильмы.',
        favEmpty: 'У вас ещё нет избранных фильмов',
        favEmptyDesc: 'Крутите рулетку и добавляйте фильмы в избранное!',
        favGoRoulette: '🎲 Перейти к рулетке',
        favRemove: '🗑️ Удалить',
        favConfirm: 'Вы уверены, что хотите удалить этот фильм из избранного?',
        favLoading: 'Загрузка...',
        favAdded: 'Добавлено в избранное! ❤️',

        // Mood
        moodLabel: 'Настроение',
        moodAny: 'Любое',
        moodHappy: '😂 Весёлое',
        moodSad: '😢 Грустное',
        moodTense: '😬 Напряжённое',
        moodExcited: '🤩 Захватывающее',
        moodChill: '😌 Спокойное',

        // Era
        eraLabel: 'Эпоха',
        eraAll: 'Все времена',
        eraOldies: 'Ретро',

        // History
        historyTitle: '📜 История',
        historyEmpty: 'История пуста.',

        // Action Buttons
        btnTrailer: 'Трейлер',
        btnShare: 'Поделиться',
        btnSeen: 'Просмотрено',

        errSelectCategory: 'Выберите хотя бы одну категорию!',
    }
};

export function getLang() {
    return localStorage.getItem('filmroulette-lang') || 'tr';
}

export function t(key) {
    const lang = getLang();
    return (translations[lang] && translations[lang][key]) || translations['tr'][key] || key;
}

export function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
}
