const query = require('../db');
const error = require('../../erro');

 function returnByID (uno, bid){
    sql_str ="call return_book(" + uno + ","+ bid + ");";  
    console.log(sql_str);
    return sql_str;
 }
 
 async function return_book(uno, bid) {
     sql_str = returnByID(uno, bid);
     let rslt;
     try {
        rslt = await query.query_usr(sql_str);
      } catch(err) {
          console.log(err);
         throw(new error.CError('UNKOWN ERROR', '还书失败'));
      }
     console.log(rslt);
     return {status: 'successfully return'};
 }

 module.exports.return_book = return_book;