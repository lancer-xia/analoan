//var express = require('express');
//var router = express.Router();
//
///* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});
//
//
//
//
//router.get('/logout', function(req, res, next) {
//    req.logout();
//    res.redirect('/');
//});
//
//
//
//
//
//module.exports = router;



/* *
 * routes/index.js
 * account为另一个子路由，可以是一个包，或者是一个模块，模块或者包遵循node的模块和包的规则。
 */

var login = require("./login");

module.exports = function(app) {
    /*其他路由规则*/
    app.all("/",function(req,res){
        /*处理请求*/
        res.render('index', { title: 'Express' });
    });

    // 登录模块
    login(app);

    /*可以定义其他路由*/
};