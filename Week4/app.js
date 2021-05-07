var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var apiRouter = require('./routes/api/productApi');
const { requireAuth, checkCurrentUser } = require('./routes/auth/authMiddleware');

var app = express();

const { MONGO_URL = 'mongodb://admin:Abcd1234@localhost:27017/nodic-nodejs?authSource=admin' } = process.env;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('*', checkCurrentUser);
app.use('/', indexRouter);
app.use('/admin', requireAuth, adminRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

const initDB = () => {
	mongoose
		.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => {
			console.log('Database connect success');
		})
		.catch((err) => {
			console.log('Database connection error:' + err);
		});
};
initDB();

module.exports = app;
