var express = require('express');
var router = express.Router();
var productosModels = require('./../models/productosModels');
var cloudinary = require('cloudinary').v2;

router.get('/productos', async function (req, res, next) {
    let productos = await productosModels.getProductos();
  
    productos = productos.map(productos => {
  
      if(productos.img_id){
        const imagen = cloudinary.url(productos.img_id, {
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
    });
  
    res.json(productos); //esto genera el json para 
  });

  module.exports = router;