const query = require('../db');
const error = require('../../erro');

function getstr(mno){
    const sql_str = 'select Book.Bid,Bname,Bpub,Bauthor from deleteRecord, Book where Book.Bid= \
                        deleteRecord.Bid and Mno =' + mno + ";" ;
    return sql_str;
}

async function getDeleteRecord(mno){
    const sql_str = getstr(mno);
    const rslt =  await query.query_mng(sql_str);
    return rslt;
}

module.exports.delete_record = getDeleteRecord;