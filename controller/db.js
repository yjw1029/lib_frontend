const mysql = require('mysql');

const pool_usr = mysql.createPool({
    host     :  'localhost',
    user     :  'User',
    password :  'user123',
    database :  'db_hw'
});

const pool_mng = mysql.createPool({
    host     :  'localhost',
    user     :  'Mng',
    password :  'Mng123',
    database :  'db_hw'
});

let query_usr = function( sql, values ) {
    return new Promise(( resolve, reject ) => {
      pool_usr.getConnection(function(err, connection) {
        if (err) {
          reject( err )
        } else {
          connection.query(sql, values, ( err, rows) => {
  
            if ( err ) {
              reject( err );
            } else {
              resolve( rows );
            }
            connection.release();
          });
        }
      });
    });
};

let query_mng = function( sql, values ) {
    return new Promise(( resolve, reject ) => {
      pool_mng.getConnection(function(err, connection) {
        if (err) {
          reject( err );
        } else {
          connection.query(sql, values, ( err, rows) => {
  
            if ( err ) {
              reject( err );
            } else {
              resolve( rows );
            }
            connection.release();
          });
        };
      });
    });
}

module.exports = {
    query_usr,
    query_mng
}
  
  