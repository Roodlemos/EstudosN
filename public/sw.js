// Service Worker for NEXO Dashboard - Enhanced Caching and Performance
const CACHE_NAME = 'nexo-dashboard-v1.0.0';
const STATIC_CACHE = 'nexo-static-v1.0.0';
const DYNAMIC_CACHE = 'nexo-dynamic-v1.0.0';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/EstudosN/',
  '/EstudosN/index.html',
  '/EstudosN/manifest.json',
  '/EstudosN/assets/css/index.css',
  '/EstudosN/assets/js/index.js',
  // Add other critical assets
];

// Dynamic assets patterns
const DYNAMIC_PATTERNS = [
  /\/EstudosN\/assets\//,
  /\/EstudosN\/api\//,
  /\/EstudosN\/dashboard/
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[SW] Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Error caching static assets:', error);
      })
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Service Worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip external requests
  if (!url.pathname.startsWith('/EstudosN/')) {
    return;
  }
  
  event.respondWith(
    handleFetchRequest(request)
  );
});

// Handle different types of requests with appropriate caching strategies
async function handleFetchRequest(request) {
  const url = new URL(request.url);
  
  try {
    // Strategy 1: Cache First for static assets
    if (isStaticAsset(url.pathname)) {
      return await cacheFirst(request, STATIC_CACHE);
    }
    
    // Strategy 2: Network First for API calls
    if (isApiCall(url.pathname)) {
      return await networkFirst(request, DYNAMIC_CACHE);
    }
    
    // Strategy 3: Stale While Revalidate for dynamic content
    if (isDynamicContent(url.pathname)) {
      return await staleWhileRevalidate(request, DYNAMIC_CACHE);
    }
    
    // Default: Network First
    return await networkFirst(request, DYNAMIC_CACHE);
    
  } catch (error) {
    console.error('[SW] Fetch error:', error);
    
    // Fallback to cache or offline page
    return await getFallbackResponse(request);
  }
}

// Cache First Strategy - for static assets
async function cacheFirst(request, cacheName) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  const networkResponse = await fetch(request);
  
  if (networkResponse.ok) {
    const cache = await caches.open(cacheName);
    cache.put(request, networkResponse.clone());
  }
  
  return networkResponse;
}

// Network First Strategy - for API calls
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// Stale While Revalidate Strategy - for dynamic content
async function staleWhileRevalidate(request, cacheName) {
  const cachedResponse = await caches.match(request);
  
  const fetchPromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      try {
        const cache = await caches.open(cacheName);
        // Clone the response before using it
        const responseClone = networkResponse.clone();
        await cache.put(request, responseClone);
      } catch (error) {
        console.warn('[SW] Failed to cache response:', error);
      }
    }
    return networkResponse;
  }).catch(error => {
    console.warn('[SW] Network request failed:', error);
    return cachedResponse;
  });
  
  return cachedResponse || fetchPromise;
}

// Get fallback response for failed requests
async function getFallbackResponse(request) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // Return offline page for navigation requests
  if (request.mode === 'navigate') {
    const offlineResponse = await caches.match('/EstudosN/index.html');
    if (offlineResponse) {
      return offlineResponse;
    }
  }
  
  // Return a basic offline response
  return new Response(
    JSON.stringify({ 
      error: 'Offline', 
      message: 'Você está offline. Verifique sua conexão com a internet.' 
    }),
    {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'application/json' }
    }
  );
}

// Helper functions to identify request types
function isStaticAsset(pathname) {
  return /\.(css|js|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/.test(pathname);
}

function isApiCall(pathname) {
  return pathname.includes('/api/');
}

function isDynamicContent(pathname) {
  return DYNAMIC_PATTERNS.some(pattern => pattern.test(pathname));
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync triggered:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Handle background sync
async function doBackgroundSync() {
  try {
    // Implement background sync logic here
    console.log('[SW] Performing background sync');
    
    // Example: sync offline actions, update cache, etc.
    
  } catch (error) {
    console.error('[SW] Background sync failed:', error);
  }
}

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('[SW] Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'Nova notificação do NEXO Dashboard',
    icon: '/EstudosN/icon-192x192.png',
    badge: '/EstudosN/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Ver Dashboard',
        icon: '/EstudosN/icon-192x192.png'
      },
      {
        action: 'close',
        title: 'Fechar',
        icon: '/EstudosN/icon-192x192.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('NEXO Dashboard', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked:', event.action);
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/EstudosN/dashboard')
    );
  }
});

console.log('[SW] Service Worker script loaded');