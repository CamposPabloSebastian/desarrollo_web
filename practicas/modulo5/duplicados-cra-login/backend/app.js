var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var session = require('express-session'); //logra que no pueda pasar sola con la url al no tener contaseña

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//MIS RUTAS
var loginRouter = require('./routes/admin/login');
var productRouter = require('./routes/admin/product');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//cheque que la sesion este guardada en mi var=session.. (siempre antes de las paginas)
app.use(session({
  secret: 'asdasdas',
  // cookie: {maxAge: null},
  resave: false,
  saveUninitialized: true
}));

//ahora hago que pase una seguridad (osea que tenga que estar en una variable de sesion para poder pasar)
secured = async (req, res, next) =>{
  try {
    console.log(req.session.id_usuario); //este id_usuario es una variable de sesion cre. no viene de la base de datos ni de otro lado
    if(req.session.id_usuario){
      next();
    }else{
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error);
  }
};

app.use('/', indexRouter);
app.use('/users', usersRouter);

//MIS USE
app.use('/admin/login', loginRouter);
app.use('/admin/product', secured, productRouter);

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
