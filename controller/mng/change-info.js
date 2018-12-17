const query = require('../db');
const error = require('../../erro');

function getInfoStr_mng(parama, mno){
    sql_str = "update Manager set Uid = '" + parama.Uid + "', Uname='" + parama.Uname + 
             "', Unum='" + parama.Unum + "' where Uno =" + mno +";";
    return sql_str;
}
function getPswdStr_mng(password,mno){
    sql_str = "update User set password='" + password + "' where Uno=" + mno +";";
    return sql_str;
}

async function setMngInfo(parama, mno){
    sql_str = getInfoStr_mng(parama, mno);
    let rslt;
    try {
        rslt = await query.query_usr(sql_str);
    } catch(err) {
        console.log(err);
    }
    return rslt;
}
async function setMngPswd(parama, mno) {
    sql_str = getPswdStr_mng(parama.password, mno);
    let rslt;
    try {
        rslt = await query.query_usr(sql_str);
    } catch(err) {
        console.log(err);
    }
    return rslt;
}

module.exports = {
    chmng_info: setMngInfo,
    chmng_pswd: setMngPswd
}