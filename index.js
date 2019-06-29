// index.js

const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

const server = app.listen(3000);

module.exports = {
  server
};
