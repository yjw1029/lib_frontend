const Router = require('koa-router');
var controller = require('../controller/all');
let mng = new Router();
const error = require('../erro');

mng.use( async(ctx,next)=> {
    if(!ctx.session||!ctx.session.status) {
        throw(new error.CError('PERMISSION_DENIED', 'you are not a maneger'));
    }
    await next();
})
mng.post('/add_books', async(ctx) => {
    const mno = ctx.session.user_id;
    const rqst = ctx.request.body;
    const rslt = await controller.mng.add_book(rqst,mno);
    ctx.response.body = rslt;
})
mng.post('/slct_mng', async(ctx) => {
    rqst = ctx.request.body;
    rslt = await controller.mng.slct_mng(rqst);
    ctx.response.body = rslt;
})
mng.post('/delete_books', async(ctx) => {
    const mno = ctx.session.user_id;
    const rqst = ctx.request.body;
    const rslt = await controller.mng.delete_books(mno,rqst);
    ctx.response.body = rslt;
})
mng.post('/add_record', async(ctx) => {
    const mno = ctx.session.user_id;
    const rslt = await controller.mng.add_record(mno);
    ctx.response.body = rslt;
})
mng.post('/delete_record', async(ctx) => {
    const mno = ctx.session.user_id;
    const rslt = await controller.mng.delete_record(mno);
    ctx.response.body = rslt;
})
mng.post('/change_pswd', async(ctx) => {
    const mno = ctx.session.user_id;
    const rqst = ctx.request.body;
    rslt = await controller.usr.change_pswd(rqst,mno);
    ctx.response.body = rslt;
})
mng.post('/change_info', async(ctx) => {
    const mno = ctx.session.user_id;
    const rqst = ctx.request.body;
    rslt = await controller.usr.change_info(rqst,mno);
    ctx.response.body = rslt;
})
module.exports = mng;