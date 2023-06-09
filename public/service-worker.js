self.__precacheManifest = [
  "/",
  {
    "url": "/_next/static/atA31KjgPPsGs0NOUG8Ev/pages/_app.js",
    "revision": "7e0f94d0139d0a884c3b"
  },
  {
    "url": "/_next/static/atA31KjgPPsGs0NOUG8Ev/pages/_error.js",
    "revision": "017dc8157b1efdd2ebe7"
  },
  {
    "url": "/_next/static/atA31KjgPPsGs0NOUG8Ev/pages/about.js",
    "revision": "9f15b53799e7f1dbeda3"
  },
  {
    "url": "/_next/static/atA31KjgPPsGs0NOUG8Ev/pages/index.js",
    "revision": "5fa8b4115dd5a208d460"
  },
  {
    "url": "/_next/static/chunks/commons.4faeb4cc540579faf2af.js",
    "revision": "4b3871107dfed41e8051"
  },
  {
    "url": "/_next/static/chunks/styles.3c58831bb0c12760fcc4.js",
    "revision": "c3c7453f298308e56a7e"
  },
  {
    "url": "/_next/static/css/styles.d61f1cd3.chunk.css",
    "revision": "c3c7453f298308e56a7e"
  },
  {
    "url": "/_next/static/runtime/main-ca93707d4b77babd499a.js",
    "revision": "72d7f9f5240fc9b9c57b"
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
