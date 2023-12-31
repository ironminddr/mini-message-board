var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require(path.join(__dirname,'../routes/home'));
var usersRouter = require('../routes/users');

var app = express();
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));




app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.send(err.message);
});


module.exports = app;
