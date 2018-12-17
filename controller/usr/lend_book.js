const query = require('../db');
const error = require('../../erro');

 function lendByID (uno, bid){
    sql_str ="call lend_book(" + uno + ","+ bid + ");"; 
    console.log(sql_str);
    return sql_str;
 }
 
 async function lend_book(uno, bid) {
     sql_str = lendByID(uno, bid);
     let rslt;
     try {
      rslt = await query.query_usr(sql_str);
      } catch(err) {
          console.log(err);
         if(err.code = 'ER_NO_REFERENCED_ROW_2') {
            throw(new error.CError(error.ERROR.DATA_NOT_FOUND, '借书失败'))
         }
         throw(new error.CError('UNKOWN ERROR', '借书失败'));
      }
     console.log(rslt);
     return {status: 'lend successfully'};
 }

 module.exports.lend_book = lend_book;