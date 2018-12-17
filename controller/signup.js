const query = require('./db');
const erro = require('../erro');

/**
 * 
 * @parama: post data from '/signin'
 * */

function getUserStr(parama) {
    let string;
    let bmax;
    switch(parama.status){
        case 'student': bmax = 10;break;
        case 'other': bmax = 6;break;
        case 'teachers': bmax= 13;break;
        case 'staff': bmax=15;break;
    }
    string = "null,\'"+ parama.username +"\',\'" + parama.realname + "\',\'" + parama.status +  
            "\'," + bmax + "," + 0 + ",\'"+parama.num + "\'," + "now(),\'" + parama.password + 
            "\',\'" + parama.email + "\'"
    return string;
}

function getMngStr(parama) {
    let string;
    string = "null,\'"+ parama.username +"\',\'" + parama.realname + "\',\'" + parama.password +  
            "\',\'" + parama.email + "\'," + "now(),\'" + parama.num + "\'"
    return  string;
}

async function insertUser(string_user, string_mng, ismng) {
    let sql_user = 'insert into User values (' + string_user +');';
    let sql_mng = 'insert into Manager values (' + string_mng + ');';
    if (ismng) {
        try {
            await query.query_mng(sql_mng);
        } catch(err){
            console.log(err.code);
            if (err.code === 'ER_DUP_ENTRY'){
                throw( new erro.CError(erro.ERROR.DATA_EXISTED, 'email is duplicated'));
            } else if (erro.code === 'ER_BAD_FIELD_ERROR') {
                throw( new erro.CError(erro.ERROR.FORMAT_INVALID, 'format invalid'));
            } else if (erro.code === 'ER_PARSE_ERROR') {
                throw( new erro.CError(erro.ERROR.DATA_INVALID, 'data invalid'))
            }
        }
    }
    try {
        await query.query_mng(sql_user);    
    } catch(err){
        console.log(err);
        if (err.code === 'ER_DUP_ENTRY'){
            throw( new erro.CError(erro.ERROR.DATA_EXISTED, 'email is duplicate'));
        } else if (erro.code === 'ER_BAD_FIELD_ERROR') {
            throw( new erro.CError(erro.ERROR.FORMAT_INVALID, 'format invalid'));
        } else if (erro.code === 'ER_PARSE_ERROR') {
            throw( new erro.CError(erro.ERROR.DATA_INVALID, 'data invalid'))
        }
    }
    return;
}

async function signup(postdata) {
    let string_user = getUserStr(postdata);
    ismng = postdata.status === 'staff'? true : false;
    string_mng = ismng? getMngStr(postdata) : '';
    await insertUser(string_user, string_mng, ismng);
    return;
}

module.exports.signup = signup;