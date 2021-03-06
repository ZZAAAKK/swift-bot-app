import conf from './config.js'
var mysql = require('mysql');

database.use(function(req, res, next) {
    res.locals.connection = mysql.createConnection({
        host:'localhost',
        user:'swiftbot',
        password:conf.password,
        database:'SlipperyWhiskers'
    });
    res.locals.connection.connect();
    next();
});