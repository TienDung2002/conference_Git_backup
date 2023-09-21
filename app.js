var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var appMethodRouter = require('./routes/appMethod');
var conferenceRouter = require('./routes/conference');
var conferenceImgRouter = require('./routes/conferenceImg')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/', usersRouter);
app.use('/users', usersRouter);
app.use('/users/fullName', usersRouter);

app.use('/app-method', appMethodRouter);
app.use('/app-method/type', appMethodRouter);

app.use('/conference', conferenceRouter)
app.use('/conference/name', conferenceRouter)
app.use('/conference/address', conferenceRouter)
app.use('/conference/NumberOfSeat', conferenceRouter)
app.use('/conference/Price', conferenceRouter)
app.use('/conference/Require_First_Pay', conferenceRouter)

app.use('/conferenceImg', conferenceImgRouter)
app.use('/conferenceImg/imageRoom', conferenceImgRouter)




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
