var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var homeRoute = require('./routes/home')

var session = require('express-session'); //trae el modulo para tarbajar con sesiones


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secretPrueba',
  resave: false,
  saveUninitialized: true
}));

app.get('/', (req, res)=>{
  var conocido = Boolean(req.session.nombre);
  console.log(conocido)
  res.render('index', {
    title: 'Bienvenido a Duplicados',
    conocido: conocido,
    nombre: req.session.nombre
  });
});

app.post('/ingresar', (req, res)=>{
  if(req.body.nombre){
    req.session.nombre = req.body.nombre
  }
  res.redirect('https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods')
  // res.render('./routes/home')
});

app.get('/salir', (req, res)=>{
  req.session.destroy();
  res.redirect('/');
});

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

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
