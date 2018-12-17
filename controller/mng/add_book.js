const query = require('../db');
const error = require('../../erro');


function getBookString(parama,mno) {
    string = 'call add_book (\'' + parama.bname +
     '\',\'' + parama.bauthor + '\',\'' + parama.bpub + '\',\'' + parama.bkind + '\',\''+ parama.bplace + '\','+ mno +');';
    console.log(string);
    return string;
}
async function addBook(parama, mno){
    const sql_book = getBookString(parama, mno);
    try{
        for(let i=0;i<parama.num;i+=1){
            await query.query_mng(sql_book);
        }
    } catch(err){
        console.log(err.code);
        switch (err.code) {
            case 'WARN_DATA_TRUNCATED': 
            case 'ER_BAD_FIELD_ERROR':
            case 'ER_PARSE_ERROR': throw(new error.CError(error.ERROR.FORMAT_INVALID, '输入错误'));break;
            default: throw(new error.CError('UNKOWN ERROR', '未知错误'));break;
        }
    }
}


module.exports.add_book = addBook;