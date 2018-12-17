const Router = require('koa-router');
let mng = require('./mng-router'); 
let home = require('./home-router')
let usr = require('./usr-router')
let router = new Router()

router.use('/', home.routes(), home.allowedMethods(['delete']))
router.use('/mng', mng.routes(), mng.allowedMethods())
router.use('/usr', usr.routes(), usr.allowedMethods())

module.exports = router;