const C='ad2-v16',F=['./','index.html','manifest.webmanifest','icon-180.png','icon-512.png','icon-192.png','favicon.ico','favicon-16.png','favicon-32.png','icon-maskable-512.png','logo.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
