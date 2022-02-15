var express = require('express');
var router = express.Router();
var productosModels = require('../../models/productosModels');

/* GET productos de BBDD. */
router.get('/', async function(req, res, next) {
  var productos = await productosModels.getProductos();

  res.render('admin/productos', {
      layout: 'admin/layout',
      usuario: req.session.nombre,
      productos
  });
});

router.get('/agregar', function(req, res, next) {
  res.render('admin/agregar', {
      layout: 'admin/layout',
  });
});

router.post('/agregar', async function(req, res, next){
  try {
    if(req.body.marca != "" && req.body.modelo != "" && req.body.descripcion != ""){
      await productosModels.insertarProducto(req.body);
      res.redirect('/admin/productos');
    }else{
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      });
    }
  } catch (error) {
    console.log(error);
    res.render('admin/agregar',{   
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo el producto'
    });
  }
})

module.exports = router;
