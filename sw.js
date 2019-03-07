importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('drainbine').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/styles/master.css',
       '/styles/bootstrap.css',
       '/styles/bootstrap.min.css',
       '/javascript/drain-map.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
   });