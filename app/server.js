const next = require('next');
const express = require('express');
const compression = require('compression');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    if (!dev) {
      server.use(compression());
    }

    server.get('/p/:id', async (req, res) => {
      const pagePath = '/';
      const queryParams = { id: req.params.id };
      return app.render(req, res, pagePath, queryParams);
    });

    server.get('*', async (req, res) => handle(req, res));

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
