const CACHE_NAME = 'flexicred-v2';
const ARCHIVOS_ESTATICOS = ['./manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ARCHIVOS_ESTATICOS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((nombres) =>
      Promise.all(nombres.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const esAppShell = event.request.mode === 'navigate' || url.pathname.endsWith('index.html') || url.pathname.endsWith('/');

  if (esAppShell) {
    // Red primero: siempre trae la versión más nueva del código si hay internet.
    // Solo usa la copia guardada cuando no hay conexión (modo offline real).
    event.respondWith(
      fetch(event.request)
        .then((resp) => {
          const copia = resp.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copia));
          return resp;
        })
        .catch(() => caches.match(event.request))
    );
  } else {
    // Íconos y manifest casi nunca cambian: caché primero.
    event.respondWith(
      caches.match(event.request).then((r) => r || fetch(event.request))
    );
  }
});
