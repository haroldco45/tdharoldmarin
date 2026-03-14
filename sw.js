self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('distrileco-v1').then((cache) => {
      return cache.addAll([
        'index.html',
        'logodistrileco.PNG',
        'catalogod.pdf'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
