const query = require('../db');
const error = require('../../erro');

function getInfoStr(parama, uno){
    sql_str = "update User set Uid = '" + parama.Uid + "', Uname='" + parama.Uname + 
             "', Unum='" + parama.Unum + "' where Uno =" + uno +";";
    return sql_str;
}
function getPswdStr(password,uno){
    sql_str = "update User set password='" + password + "' where Uno=" + uno +";";
    return sql_str;
}

async function setUserInfo(parama, uno){
    sql_str = getInfoStr(parama, uno);
    let rslt;
    try {
        rslt = await query.query_usr(sql_str);
    } catch(err) {
        console.log(err);
    }
    return rslt;
}
async function setUserPswd(parama, uno) {
    sql_str = getPswdStr(parama.password, uno);
    let rslt;
    try {
        rslt = await query.query_usr(sql_str);
    } catch(err) {
        console.log(err);
    }
    return rslt;
}

module.exports = {
    chusr_info: setUserInfo,
    chusr_pswd: setUserPswd
}