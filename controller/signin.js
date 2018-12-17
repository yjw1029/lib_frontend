const query = require('./db');
const erro = require('../erro');

/**
 * 
 * @parama: data passed from '/signin'
 *  
 * */
async function signin_usr(parama){
    let sql_usr = "select Uno,Uid,Uname,Uemail,Unum from User where Uemail =\'" + parama.email + "\' and password = \'" + parama.password + "\';";
    let rslt = await query.query_usr(sql_usr);
    console.log(rslt);
    console.log(typeof rslt);
    if (rslt.length === 0){
        throw (new erro.CError(erro.ERROR.DATA_NOT_FOUND, 'cannot find'));
    }
    return rslt[0];
}

async function signin_mng(parama){
    let sql_mng = "select Mno,Mid,Mname,Memail,Mnum from Manager where Memail =\'" + parama.email + "\' and password = \'" + parama.password + "\';";
    let rslt = await query.query_mng(sql_mng);
    console.log(rslt);
    if (rslt.length === 0){
        throw (new erro.CError(erro.ERROR.DATA_NOT_FOUND, 'cannot find'));
    }
    return rslt[0];
}

async function signin(parama) {
    if(parama.status === 'mng'){
        return await signin_mng(parama);
    } else {
        return await signin_usr(parama);
    }
}

module.exports.signin = signin;