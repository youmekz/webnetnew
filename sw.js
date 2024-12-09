importScripts('./cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('title').then(function(cache) {
     return cache.addAll([
       './assets/css/styles.css',
     ]);
   })
 );
});

self.addEventListener('install', function(event) {
});

self.addEventListener('activate', function(event) {
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});