const cacheableResponse = require('cacheable-response');
const next = require('next');
const express = require('express');
const compression = require('compression');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const ssrCache = cacheableResponse({
  ttl: 1000 * 60 * 5, // 5min
  get: async ({ req, res, pagePath, queryParams }) => ({
    data: await app.renderToHTML(req, res, pagePath, queryParams)
  }),
  send: ({ data, res }) => res.send(data)
});

app
  .prepare()
  .then(() => {
    const server = express();

    if (dev) {
      server.use(compression());
    }

    server.get('/p/:id', async (req, res) => {
      const pagePath = '/';
      const queryParams = { id: req.params.id };
      return app.render(req, res, pagePath, queryParams);
    });

    server.get('/', async (req, res) => {
      return dev ? handle(req, res) : ssrCache({ req, res });
    });

    server.get('*', async (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
