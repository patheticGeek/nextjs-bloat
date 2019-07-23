// next.config.js
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withOffline = require('next-offline');

module.exports = withOffline(
  withCSS(
    withImages({
      distDir: '../functions/next',
      transformManifest: manifest => ['/'].concat(manifest),
      workboxOpts: {
        swDest: 'static/service-worker.js',
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'https-calls',
              networkTimeoutSeconds: 15,
              expiration: {
                maxEntries: 150,
                maxAgeSeconds: 60 * 60 // 1hr
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  )
);
