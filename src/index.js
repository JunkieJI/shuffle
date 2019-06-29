import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import mongoose from 'mongoose';
import { router } from './routes';
import { port, connectionString } from './config';

/* * Mongoose config * */
mongoose.connect(connectionString, { useNewUrlParser: true });
mongoose.connection.on('error', console.error);

const app = new Koa();

// log all events to the terminal
app.use(logger());

app.use(bodyParser());

// error handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});

app.use(router.routes()).use(router.allowedMethods());

const server = app.listen(port, () =>
  console.log(`✅  The server is running at http://localhost:${port}/`)
);

module.exports = { server };
