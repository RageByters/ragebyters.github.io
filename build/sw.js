const CACHE_NAME = 'ragebyters-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/assets/css/style.css',
    '/assets/js/main.js',
    '/assets/js/background.js',
    '/assets/images/logo.png',
    'https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Orbitron:wght@400;700;900&family=Inter:wght@400;600;800&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css',
    'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js',
    'https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js'
];

// Install Event
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
    );
});

// Activate Event
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(keys.map((key) => {
                if (key !== CACHE_NAME) return caches.delete(key);
            }));
        })
    );
});

// Fetch Event
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => {
            return res || fetch(e.request);
        })
    );
});
