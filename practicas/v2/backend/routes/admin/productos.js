var express = require('express');
const pool = require('../../models/db');
var router = express.Router();
var productosModels = require('../../models/productosModels');
var util = require('util');
var cloudinary = require('cloudinary').v2;
var uploader = util.promisify(cloudinary.uploader.upload);
var destroy = util.promisify(cloudinary.uploader.destroy); //para destruir imgen

/* GET productos de BBDD. */
router.get('/', async function (req, res, next) {
  var productos = await productosModels.getProductos();

  productos = productos.map(productos => {

    if(productos.img_id){
      const imagen = cloudinary.image(productos.img_id, {
        width: 100,
        crop: 'fill' //pad
      });

      return{
        ...productos,
        imagen
      }
    }else{
      return{
        ...productos,
        imagen: ''
      }
    }
  })

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

    var img_id ='';
    if(req.files && Object.keys(req.files).length > 0){
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id; //esto genera el numero que se guarda en el id
    }

    if (req.body.marca != "" && req.body.modelo != "" && req.body.descripcion != "") {
      await productosModels.insertarProducto({
        ...req.body,
        img_id
      });

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

  let productos = await productosModels.getProductoById(id);
  if(productos.img_id){
    await (destroy(productos.img_id));
  }

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

    let img_id = req.body.img_original;
    console.log('tu imagen original es: ', img_id);
    let borrar_img_vieja = false;

    if(req.body.imagen_delete === "1"){ //revisar los id y name
      img_id = null;
      borrar_img_vieja = true;

    }else{

      if(req.files && Object.keys(req.files).length > 0){
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }

    if(borrar_img_vieja && req.body.img_original){
      await (destroy(req.body.img_original));
    }

    if (req.body.marca != "" && req.body.modelo != "" && req.body.descripcion != ""){
      var obj = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        descripcion: req.body.descripcion,
        img_id
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

