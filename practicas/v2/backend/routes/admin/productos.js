var express = require('express');
const pool = require('../../models/db');
var router = express.Router();
var productosModels = require('../../models/productosModels');

/* GET productos de BBDD. */
router.get('/', async function (req, res, next) {
  var productos = await productosModels.getProductos();

  res.render('admin/productos', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    productos
  });
});

router.get('/agregar', function (req, res, next) {
  res.render('admin/agregar', {
    layout: 'admin/layout',
  });
});

router.post('/agregar', async function (req, res, next) {
  try {
    if (req.body.marca != "" && req.body.modelo != "" && req.body.descripcion != "") {
      await productosModels.insertarProducto(req.body);
      res.redirect('/admin/productos');
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      });
    }
  } catch (error) {
    console.log(error);
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo el producto'
    });
  }
})


//para eliminar producto

router.get('/eliminar/:id', async function (req, res, next) {
  var id = req.params.id;
  await productosModels.deleteProductoById(id);
  res.redirect('/admin/productos');
});


//para modificar producto

router.get('/modificar/:id', async function (req, res, next) {
  var id = req.params.id;
  var product = await productosModels.getProductoById(id);

  res.render('admin/modificar', {
    layout: 'admin/layout',
    product
  });
});


//para subir el producto modificado a la base de datos
router.post('/modificar', async function (req, res, next) {
  try {
    if (req.body.marca != "" && req.body.modelo != "" && req.body.descripcion != ""){
      var obj = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        descripcion: req.body.descripcion
      }

      await productosModels.editProductoById(obj, req.body.id_producto);
      res.redirect('/admin/productos');

    }else {
      res.render('admin/modificar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }

  } catch (error) {
    console.log(error);
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico el producto'
    });
  }
})

module.exports = router;

