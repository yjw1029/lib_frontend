const query = require('../db');
const error = require('../../erro');


function getInfoStr(uno){
    const sql_str = "select from User where Uno = " + uno + ";";
    return sql_str;
}

async function getUsrInfoByID(uno){
    const sql_str = getInfoStr(uno);
    const rslt = await query.query_usr(sql_str);
    return rslt;
}

module.exports= {
    get_info_byuid: getUsrInfoByID,
}