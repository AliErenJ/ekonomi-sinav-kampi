// Önbellek: uygulama ilk açılışta tüm dosyaları saklar, sonra internetsiz çalışır.
const CACHE = "ekonomi-v4";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png", "fonts/atkinsonhyperlegible_v12_9Bt23C1KxNDXMspQ1lPyU89_1h6ONRlW45G04pIoWQeCbA.woff2", "fonts/atkinsonhyperlegible_v12_9Bt23C1KxNDXMspQ1lPyU89_1h6ONRlW45G07JIoWQeCbGWn.woff2", "fonts/atkinsonhyperlegible_v12_9Bt43C1KxNDXMspQ1lPyU89_1h6ONRlW45G056IkUwCgblWmLWQ.woff2", "fonts/atkinsonhyperlegible_v12_9Bt43C1KxNDXMspQ1lPyU89_1h6ONRlW45G056IqUwCgblWm.woff2", "fonts/atkinsonhyperlegible_v12_9Bt73C1KxNDXMspQ1lPyU89_1h6ONRlW45G8Wbc9dCWPRl_uFQ.woff2", "fonts/atkinsonhyperlegible_v12_9Bt73C1KxNDXMspQ1lPyU89_1h6ONRlW45G8Wbc9eiWPRl_uFV24.woff2", "fonts/bricolagegrotesque_v9_3y9K6as8bTXq_nANBjzKo3IeZx8z6up5BeSl9D4dj_x9PpZBMlGGInHWVyNJtvI.woff2", "fonts/bricolagegrotesque_v9_3y9K6as8bTXq_nANBjzKo3IeZx8z6up5BeSl9D4dj_x9PpZBMlGIInHWVyNJ.woff2", "fonts/jetbrainsmono_v24_tDbY2o_flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8_qxTNFOVk6WThjPA.woff2", "fonts/jetbrainsmono_v24_tDbY2o_flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8_qxTOlOVk6WThg.woff2"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request)));
});
