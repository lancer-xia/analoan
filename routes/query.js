/**
 * Created by lancer on 15-2-2.
 */

var express = require('express');
var router = express.Router();
var mysqlDao = require('../public/js/dao/mysqlDao.js');

router.get('/', function(req, res, next) {
    mysqlDao.query('SELECT * FROM userinfo', function(err, result){
    	if (err) {
    		console.log(err);
    	} else {
    		console.log(JSON.stringify(result));
    		res.render('index', { title: 'MySql query data test.', body: JSON.stringify(result) });
    	}
    });
});

module.exports = router;