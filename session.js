const session = require('koa-session-minimal')
const MysqlSession = require('koa-mysql-session')

// 配置存储session信息的mysql
let store = new MysqlSession({
  user: 'Mng',
  password: 'Mng123',
  database: 'db_hw',
  host: '127.0.0.1',
})

// 存放sessionId的cookie配置
let cookie = {
  maxAge: 60*60*60*24*3, // cookie有效时长
  httpOnly: false, // 是否只用于http请求中获取
  overwrite: true,  // 是否允许重写
  signed: true,
  secure: false,
}

// 使用session中间件
module.exports = {
  session: session,
  cookie: cookie,
  store: store
}


