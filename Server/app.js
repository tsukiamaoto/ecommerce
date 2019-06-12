const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const productsRouter = require('./controller/product');
const usersRouter = require('./controller/users');
const cartRouter = require('./controller/cart')
const mongoose = require('mongoose');
const app = express();
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const validator = require('express-validator');
const MongoStore = require('connect-mongo')(session);
require('dotenv').config();
require('./passport');

mongoose.connect(process.env.mongoDB,{useNewUrlParser : true});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret : 'mysupersecrect' ,
  resave :false,
  saveUninitialized :false,
  store : new MongoStore({ mongooseConnection : mongoose.connection}),
  cookie : {maxAge : 180*60*1000}
}));
app.use(validator());
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req,res,next) {
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  next();
});

app.use('/account', usersRouter);
app.use('/product', productsRouter);
app.use('/cart', cartRouter);

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
