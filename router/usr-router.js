const Router = require('koa-router');
var controller = require('../controller/all');
let usr = new Router();
const error = require('../erro');


usr.use( async(ctx, next)=> {
    console.log(ctx.session);
    if(!ctx.session || ctx.session.status) {
        throw(new error.CError('PERMISSION_DENIED', 'you are not a user'));
    }
    await next();
})
usr.post('/lend_book', async(ctx) => {
    const uno = ctx.session.user_id;
    const bid = ctx.request.body.bid;
    rslt = await controller.usr.lend_book(uno, bid);
    ctx.response.body = rslt;
})

usr.post('/return_book', async(ctx) => {
    const uno = ctx.session.user_id;
    const bid = ctx.request.body.bid;
    rslt = await controller.usr.return_book(uno, bid);
    ctx.response.body = rslt;
})
usr.post('/lended_books', async(ctx) => {
    const uno = ctx.session.user_id;
    rslt = await controller.usr.lended_books(uno);
    ctx.response.body = rslt;
})
usr.post('/return_books', async(ctx) => {
    const uno = ctx.session.user_id;
    const bids = ctx.request.body.bids;
    rslt = await controller.usr.return_books(uno, bids);
    ctx.response.body = rslt;
})
usr.post('/slct_usr', async(ctx) => {
    const rqst = ctx.request.body;
    rslt = await controller.usr.consult(rqst);
    ctx.response.body = rslt;
})
usr.post('/change_info', async(ctx) => {
    const uno = ctx.session.user_id;
    const rqst = ctx.request.body;
    rslt = await controller.usr.change_info(rqst,uno);
    ctx.response.body = rslt;
})
usr.post('/change_pswd', async(ctx) => {
    const uno = ctx.session.user_id;
    const rqst = ctx.request.body;
    rslt = await controller.usr.change_pswd(rqst,uno);
    ctx.response.body = rslt;
})
usr.post('/get_info_byid', async(ctx) => {
    const uno = ctx.session.user_id;
    rslt = await controller.usr.get_info_byid(uno);
    ctx.response.body = rslt;
})
module.exports = usr;