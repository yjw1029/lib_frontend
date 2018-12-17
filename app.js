const koa = require('koa');
const app = module.export = new koa();
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const router = require('./router/router');
const error = require('./erro');
const session =require('./session');
process.env.TZ = 'Chines/Beijing'
app.use(cors({
  allowMethods: ['GET', 'POST', 'DELETE'],
  credentials: true,
  origin: 'http://localhost:4200'
}));
app.use(bodyParser());
app.use(error.errorHandler);
app.use(session.session({
  key: 'SESSION_ID',
  store: session.store,
  cookie: session.cookie
},app))
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
    console.log('[demo] route-use-middleware is starting at port 3000')
  })