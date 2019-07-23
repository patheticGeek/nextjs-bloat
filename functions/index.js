const functions = require('firebase-functions');
const admin = require('firebase-admin');
const next = require('next');
const express = require('express');
const compression = require('compression');
const cacheableResponse = require('cacheable-response');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: 'next' } });
const handle = app.getRequestHandler();

admin.initializeApp();

const ssrCache = cacheableResponse({
  ttl: 1000 * 60 * 5, // 5min
  get: async ({ req, res }) => ({
    data: await app.renderToHTML(req, res)
  }),
  send: ({ data, res }) => res.send(data)
});

app.prepare();

const server = express();

server.use(compression());

server.get('/p/:id', async (req, res) => {
  const pagePath = '/';
  const queryParams = { id: req.params.id };
  return ssrCache({ req, res, pagePath, queryParams });
});

server.get('*', async (req, res) => handle(req, res));

module.exports = {
  server: functions.https.onRequest(server)
};
