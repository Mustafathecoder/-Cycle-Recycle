self.addEventListener('install', event => {
  event.waitUntil(
      caches.open('cycle-recycle-store').then(cache => cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/script.js',
          '/icon.png',
      ]))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
  );
});
