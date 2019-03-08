const PRECACHE='precache-v1';
const RUNTIME = 'runtime';

const PRECACHE_URLS = [
  '/',
  'index.html',
  'index.html>homescreen=1',
  '?homescreen=1',
  'styles/master.css',
  'styles/bootstrap.css',
  'styles/bootstrap.min.css',
  'javascript/drain-map.js',
  'manifest.json',
]

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
   });