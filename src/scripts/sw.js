import CacheHelper from "./service/caches/cache";
import "regenerator-runtime";

const assetsToCache = [
  "./",
  "./index.html",
  "./images/heros/close.png",
  "./images/heros/hero-image_2.jpg",
  "./images/heros/iconMenu.png",
  "./images/heros/KNIRA_-Restaurant.png",
  "./images/heros/no_data.png",
  "./images/heros/menu.svg",
  "./app.bundle.js",
  "./sw.bundle.js",
];

CacheHelper.cachingAppShell([...assetsToCache]);
self.addEventListener("install", (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

CacheHelper.deleteOldCache();
self.addEventListener("activate", (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});

// self.addEventListener('install', (event) => {
//   event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
// });

// self.addEventListener('activate', (event) => {
//   event.waitUntil(CacheHelper.deleteOldCache());
// });

// self.addEventListener('fetch', (event) => {
//   event.respondWith(CacheHelper.revalidateCache(event.request));
// });
