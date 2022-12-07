var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/nft');
var buyRouter = require('./routes/buy');
var tableOwnedRouter = require('./routes/tableOwned')
var purchaseLogRouter = require('./routes/purchaseLog')
var managerRouter = require('./routes/managerView')
var refundRouter = require('./routes/requestRefund')
var actualpurchaseLogRouter = require('./routes/actualPurchaseLog')
var addMoneyRouter = require('./routes/addMoney')
var bodyParser = require('body-parser')
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// view engine setup
app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', buyRouter);
app.use('/', tableOwnedRouter);
app.use('/', purchaseLogRouter);
app.use('/', actualpurchaseLogRouter);
app.use('/', addMoneyRouter);
app.use('/', managerRouter);
app.use('/', refundRouter);

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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

module.exports = app;