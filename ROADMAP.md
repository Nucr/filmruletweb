# FilmRoulette — Geliştirme Planı

## ✅ Tamamlanan Özellikler (Faz 1)

### Film Detay Modal
- Favorilere tıklayınca modal açılıyor
- TMDB'den tam detay çekiliyor (özet, puan, süre, oyuncular, yönetmen)
- İzleme platformları gösteriliyor
- Poster/backdrop görselleri

### Favori Filtreleme
- Türe göre filtreleme
- Tarihe göre sıralama (en yeni/en eski)
- Alfabetik sıralama (A-Z)
- Kombinasyon desteği

### SEO Optimizasyonu
- Meta description, keywords
- Open Graph tags (sosyal medya paylaşım)
- Twitter Card
- Structured Data (JSON-LD)
- Sitemap hazır
- robots.txt

### Responsive & UX
- Tüm sayfalar mobil uyumlu
- Touch-friendly butonlar
- Loading states
- Error handling
- Smooth animations

---

## 🔄 Faz 2 — Sosyal Özellikler (Gelecek)

### Yorum Sistemi
**Firebase Firestore Yapısı:**
```
comments/
  {movieId}/
    comments/
      {commentId}/
        userId: string
        userName: string
        userPhoto: string
        text: string
        timestamp: timestamp
        likes: number
        dislikes: number
        likedBy: array<userId>
        dislikedBy: array<userId>
```

**Özellikler:**
- Kullanıcı yorumu yazabilir
- Beğeni/dislike yapabilir
- Tarih gösterilir
- Sadece kendi yorumunu silebilir
- Moderasyon sistemi (küfür filtresi)

### Film İstatistikleri
```
movieStats/
  {movieId}/
    viewCount: number
    favoriteCount: number
    averageUserRating: number
    watchedBy: array<userId>
```

### Kullanıcı Profili
- İzleme geçmişi
- Yorum geçmişi
- İstatistikler (toplam izleme süresi, favori türler)
- Avatar değiştirme

---

## 🎯 Faz 3 — İleri Özellikler

### Öneri Sistemi
- Kullanıcının favori türlerine göre öneri
- Benzer film önerileri
- "Diğer kullanıcılar da izledi"

### Sosyal Etkileşim
- Arkadaş sistemi
- Aktivite feed
- Film önerme/paylaşma
- Watchlist paylaşımı

### Gamification
- Rozet sistemi (100 film izledin, 10 yorum yaptın)
- Seviye sistemi
- Liderlik tablosu

---

## 📊 Performans & Güvenlik

### Yapılacaklar:
- [ ] Image lazy loading
- [ ] Code splitting
- [ ] Service Worker (offline support)
- [ ] Rate limiting
- [ ] Input sanitization
- [ ] CSRF protection
- [ ] Content Security Policy

---

## 🛠️ Teknik Borç

- Firebase güvenlik kuralları güncelleme
- Unit testler yazma
- E2E testler (Playwright)
- CI/CD pipeline
- Error tracking (Sentry)
- Analytics (GA4)
