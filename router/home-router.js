const Router = require('koa-router');
let controller = require('../controller/all');
let home = new Router();

home.post('signin', async(ctx) => {
    rqst = ctx.request.body;
    console.log(rqst);
    rslt = await controller.signin(rqst);
    ctx.session = {
        user_id: rqst.status === 'mng'? rslt.Mno : rslt.Uno,
        status: rqst.status === 'mng'
    };
    console.log('maxAge:' + ctx.session.cookie);
    ctx.response.body = rslt;
})
home.post('signup', async(ctx) => {
    rqst = ctx.request.body;
    rslt = await controller.signup(rqst);
    ctx.response.body = rslt;
})
home.del('logout', controller.logout)

module.exports = home;