const query = require('../db');
const error = require('../../erro');

function returnByID (uno, bid){
    sql_str ="call return_book(" + uno + ","+ bid + ");";  
    console.log(sql_str);
    return sql_str;
}
async function return_books(uno, bids) {
    for (let bid of bids) {
        sql_str = returnByID(uno, bid);
        let rslt;
        try {
           rslt = await query.query_usr(sql_str);
         } catch(err) {
            throw(new error.CError(error.DARA, '还书失败'));
         }
        console.log(rslt);
    }
    return {status: 'successfully return'};
}

module.exports.return_books = return_books;
 