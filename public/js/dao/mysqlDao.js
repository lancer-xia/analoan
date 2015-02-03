/**
 * Created by lancer on 15-2-2.
 */

var mypool  = require('./mysql.js');

var Query = function() {};

Query.prototype.query = function(sql, callback) {
    mypool.getConnection(function(err,connection){
        // connection.query('SELECT * FROM userinfo WHERE id = ' + mysqlpool.escape('1 OR ID = 2') ,function(err,result){
        connection.query(sql ,function(err,result){
            connection.release();
            callback(err, result);
        });
    });
};

// Query.prototype.findByIdAndUpdate = function(obj,callback){
//   var _id=obj._id;
//   delete obj._id;
//   Movie.findOneAndUpdate(_id, obj, function(err,obj){
//     callback(err, obj);
//   });
// }


// Query.prototype.findByName = function(name, callback) {
//   Movie.findOne({name:name}, function(err, obj){
//     callback(err, obj);
//   });
// };

module.exports = new Query();