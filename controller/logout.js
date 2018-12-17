const erro = require('../erro');

async function logout(ctx) {
    ctx.session = null;
    console.log(ctx.session);
    ctx.response.body = {data: 'suuceed'};
    ctx.state = 200;
}

module.exports.logout = logout;