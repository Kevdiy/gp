const CACHE_NAME = 'gabor-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
  // If your GABOR_IMAGE_DATA is a separate file, add it here. 
  // Since it's currently a Base64 string inside your HTML, you don't need to add extra paths.
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
