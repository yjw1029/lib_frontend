const query = require('../db');
const error = require('../../erro');

 function dltByID (mno,bid){
    sql_str ='call delete_book(' + bid + "," + mno + ');' 
    console.log(sql_str);
    return sql_str;
 }
 
 async function delete_books(mno,parama) {
     let rslt;
     try {
      for(let i of parama.bids){
         const sql_str = dltByID(mno, i);
         await query.query_mng(sql_str);
      }
      } catch(err) {
         console.log(err);
         throw(new error.CError('UNKOWN ERROR', '删除失败'));
      }
     console.log(rslt);
     return {status: 'successfully delete'};
 }

 module.exports.delete_books = delete_books;