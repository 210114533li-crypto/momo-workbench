var CACHE='momo-v2',FILES=['/','/index.html','/manifest.json','/icon-192.png','/icon-512.png','/icon-1024.png','/apple-touch-icon.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(FILES)}))});
self.addEventListener('fetch',function(e){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request)}))});
