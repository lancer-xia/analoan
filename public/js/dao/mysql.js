var mysql  = require('mysql');

var mysqlpool  = mysql.createPool({
    host   : 'localhost',
    user   : 'root',
    password : 'root',
    port: '3306',
    database: 'analoan'
});

module.exports = mysqlpool;