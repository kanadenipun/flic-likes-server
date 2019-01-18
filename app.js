var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bluebird = require('bluebird')
var mongoose = require('mongoose')

var index = require('./routes/index.route');
var api = require('./routes/api.route')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'docs')));

app.use('/', index);
app.use('/api', api);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




app.use(function(req, res, next) {

  var allowedOrigins = ['http://flic-likes-server.herokuapp.com', 'http://localhost:3000/', 'https://flic-likes-server.github.io'];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
         res.setHeader('Access-Control-Allow-Origin', origin);
    }

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

mongoose.connect(process.env.FLIC_LIKES_DB_URL, { useMongoClient: true})
.then(()=> { console.log('Succesfully Connected to the Mongodb Database')})
.catch(()=> { console.log('Error Connecting to the Mongodb Database')})

module.exports = app;
