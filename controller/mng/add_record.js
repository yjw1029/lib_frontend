const query = require('../db');
const error = require('../../erro');

function getstr(mno){
    const sql_str = 'select Book.Bid,Bname,Bpub,Bauthor from addRecord, Book where Book.Bid= \
                        addRecord.Bid and Mno =' + mno + ";" ;
    return sql_str;
}

async function getAddRecord(mno){
    const sql_str = getstr(mno);
    const rslt =  await query.query_mng(sql_str);
    return rslt;
}

module.exports.add_record = getAddRecord;