// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAy4K8ups_Zp10EbeR-rvKGVzQHqfL-kIY",
  authDomain: "filmroulette-f9cb2.firebaseapp.com",
  projectId: "filmroulette-f9cb2",
  storageBucket: "filmroulette-f9cb2.firebasestorage.app",
  messagingSenderId: "396108091467",
  appId: "1:396108091467:web:998f5148eeba637bc93dce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth ve Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

// ─── Email/Şifre ile Kayıt Ol ───
export async function signUp(email, password) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  // Kayıt olduktan sonra doğrulama maili gönder
  await sendEmailVerification(userCredential.user);
  return userCredential.user;
}

// ─── Email/Şifre ile Giriş Yap ───
export async function signIn(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

// ─── Şifre Sıfırlama (Forgot Password) ───
export async function resetPassword(email) {
  await sendPasswordResetEmail(auth, email);
}

// ─── Sosyal Giriş (Google, Facebook, GitHub, Twitter) ───
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result.user;
}


export async function signInWithGithub() {
  const provider = new GithubAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result.user;
}

export async function signInWithTwitter() {
  const provider = new TwitterAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result.user;
}

// ─── Çıkış Yap ───
export async function logOut() {
  await signOut(auth);
}

// ─── Kullanıcı Durumu Dinleyici ───
export function onUserChange(callback) {
  onAuthStateChanged(auth, callback);
}

// ─── Favori Ekle ───
export async function addFavorite(userId, movie) {
  try {
    await addDoc(collection(db, "users", userId, "favorites"), {
      tmdbId: movie.id,
      movieId: movie.id, // Backward compatibility
      title: movie.title,
      poster: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '',
      rating: movie.vote_average || 0,
      genres: movie.genres || [],
      releaseDate: movie.release_date || '',
      addedAt: new Date()
    });
    console.log("Favoriye eklendi kral!");
  } catch (error) {
    console.error("Favori ekleme hatası:", error);
  }
}

// ─── Favorileri Getir ───
export async function getFavorites(userId) {
  const favs = [];
  const querySnapshot = await getDocs(collection(db, "users", userId, "favorites"));
  querySnapshot.forEach((doc) => {
    favs.push({ id: doc.id, ...doc.data() });
  });
  return favs;
}

// ─── İzlenenlere Ekle (MovieMap Profil için) ───
export async function markAsWatched(userId, movie) {
  try {
    await addDoc(collection(db, "users", userId, "watched"), {
      tmdbId: movie.id,
      title: movie.title,
      poster: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '',
      rating: movie.vote_average || 0,
      genres: movie.genres || [],
      runtime: movie.runtime || 0,
      releaseDate: movie.release_date || '',
      watchedAt: new Date()
    });
    console.log("İzlenenlere eklendi!");
  } catch (error) {
    console.error("İzlenenlere ekleme hatası:", error);
  }
}

// ─── İzlenenleri Getir ───
export async function getWatchedMovies(userId) {
  const watched = [];
  const querySnapshot = await getDocs(collection(db, "users", userId, "watched"));
  querySnapshot.forEach((doc) => {
    watched.push({ id: doc.id, ...doc.data() });
  });
  return watched;
}