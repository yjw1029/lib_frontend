const query = require('../db');
const error = require('../../erro');

 function booksByID (uno){
    sql_str ="select Book.Bid,Bname,Bpub,Bauthor,Bplace from UB, Book where Uno="+ uno +" and UB.Bid=Book.Bid;"; 
    console.log(sql_str);
    return sql_str;
 }
 
 async function lended_books(uno) {
     sql_str = booksByID(uno);
     let rslt;
     try {
      rslt = await query.query_usr(sql_str);
      } catch(err) {
          console.log(err);
         throw(new error.CError('UNKOWN ERROR', '查询失败'));
      }
     console.log(rslt);
     return rslt;
 }

 module.exports.lended_books = lended_books;