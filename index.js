const express = require('express');
const proxy = require('http-proxy-middleware');

const target = process.env.PROXY_TARGET;
const debug = process.env.DEBUG || false;
const port = process.env.PORT || 9000;

const app = express();

app.use(proxy(process.env.PROXY_TARGET, {
  logLevel: debug ? 'debug' : 'info',
  changeOrigin: true
}));

app.listen(port, () => {
  console.log(`Proxy started at http://localhost:${port}. Proxying all requests to ${target}`)
});

