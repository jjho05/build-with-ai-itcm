const CACHE_NAME = 'build-with-ai-v4';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/icon-512.png',
  '/gemini-sparkle.png'
];

self.addEventListener('install', (event) => {
  // Fuerza al nuevo service worker a tomar el control inmediatamente
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  // Limpia cachés antiguos (v1, v2, v3, etc.)
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Estrategia: "Network First" (Red Primero, Caché como respaldo).
  // Garantiza que siempre veas la última versión sin tener que recargar.
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Opcional: actualizar el caché con la versión fresca
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      })
      .catch(() => {
        // Si no hay internet, sirve la versión offline del caché
        return caches.match(event.request);
      })
  );
});
