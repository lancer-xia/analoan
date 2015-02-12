var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var connect = require('connect');

var routes = require('./routes');
routes(app);
//var users = require('./routes/users');
//var query = require('./routes/query');

var app = express();

//app.use(connect());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.use('/bower_components', express.static(path.join(__dirname + '/bower_components')));

app.use(express.session({secret: 'localhost', cookie: { maxAge: 60000 }}));
app.use(passport.initialize());
app.use(passport.session());

//app.use('/', routes);
//app.use('/users', users);
//app.all('/users', isLoggedIn);
//
//// 检查是否已经登录
//function isLoggedIn(req, res, next) {
//    if (req.isAuthenticated())
//        return next();
//
//    res.redirect('/');
//}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
