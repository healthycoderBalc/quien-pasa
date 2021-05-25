const assets = [
    "./", 
    "index.html",
    "/images/button.png",
    "/images/fondo5.jpg",
    "/css/materialize.min.css",
    "/js/materialize.min.js",
    "index.js",
    "manifest.json",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "favicon.ico",
    "/images/android-icon-144x144.png"
]

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(assets);
        })
    )
});

self.addEventListener("activate", e => {
    console.log("ServiceWorker has been ACTIVATED!")
});



self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});