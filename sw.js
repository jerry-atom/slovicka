const CACHE_NAME = "words-cache-v3"
const urlsToCache = [
  "/index.html",
  "/main.css",
  "dist/lesson.controller.js",
  "dist/lesson.js",
  "dist/main.js",
  "dist/question.js",
  "dist/router.js",
  "dist/settings.controller.js",
  "dist/settings.repository.js",
  "dist/types.js",
  "dist/utils.js",
  "dist/words.controller.js",
  "dist/words.js",
  "dist/words.repository.js",

]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  )
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  )
})
