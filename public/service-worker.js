self.__precacheManifest = [
  "/",
  {
    "url": "/_next/static/caSD1vCckTlEhZi-5WMvh/pages/_app.js",
    "revision": "03512b81522837b09e48"
  },
  {
    "url": "/_next/static/caSD1vCckTlEhZi-5WMvh/pages/_error.js",
    "revision": "d4543d2ff9c48e756dcd"
  },
  {
    "url": "/_next/static/caSD1vCckTlEhZi-5WMvh/pages/about.js",
    "revision": "361549795a3c4941b413"
  },
  {
    "url": "/_next/static/caSD1vCckTlEhZi-5WMvh/pages/index.js",
    "revision": "610c7dd9005e6d3ac58c"
  },
  {
    "url": "/_next/static/chunks/commons.66b03bfa2b9dbebeef91.js",
    "revision": "86aee8815dd7b449b3f2"
  },
  {
    "url": "/_next/static/chunks/styles.3c58831bb0c12760fcc4.js",
    "revision": "392a4c0f787b3e067021"
  },
  {
    "url": "/_next/static/css/styles.58758efb.chunk.css",
    "revision": "392a4c0f787b3e067021"
  },
  {
    "url": "/_next/static/runtime/main-5f8273b066008d8c959d.js",
    "revision": "6eabe9b1fc62b260c268"
  },
  {
    "url": "/_next/static/runtime/webpack-8ed9452df514b4d17d80.js",
    "revision": "c9d4f4ac318bec9c37e2"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"https-calls","networkTimeoutSeconds":15, plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 3600, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
