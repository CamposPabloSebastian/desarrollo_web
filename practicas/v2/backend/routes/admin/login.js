var express = require('express');
var router = express.Router();

var usuarioModel = require('./../../models/usuariosModels')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', {
      layout: 'admin/layout'
  });
});

//para destruir sesion
router.get('/logout', function(req, res, next) { //aca la profe le pone /logout (si lo quito)
  req.session.destroy();
  res.render('admin/login', {
      layout: 'admin/layout'
  });
});



router.post('/', async (req, res, next)=>{
  try {
    var usuario = req.body.usuario; //usuario y password lo trae del name de la vista login
    var password = req.body.password;

    var data = await usuarioModel.getUserBynameAndPassword(usuario
      , password);

      if(data != undefined){
        req.session.id_usuario = data.id; // este data.id es el nombre de la colum en base de datos, el data trae los datos de la base de datos
        req.session.nombre = data.usuario;
        res.redirect('/admin/productos') 
      }else{
        res.render('admin/login', {
          layout: 'admin/layout', 
          error: true
        });
      }
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;