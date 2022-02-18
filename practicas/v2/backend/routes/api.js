var express = require('express');
var router = express.Router();
var productosModels = require('./../models/productosModels');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

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


  router.post('/contacto', async (req, res) => {

    const mail = {
      to: 'pablo.c1791@gmail.com',
      subject: 'contacto_duplicados',
      html: `${req.body.nombre}, ${req.body.apellido} se contacto a travez de la web y requiere mas informacion sobre el siguiente equipo:<br>Marca: ${req.body.marca}<br>Modelo: ${req.body.modelo} <br>En caracter de  ${req.body.motivo}<br> Realizo el siguiente comentario: ${req.body.comentario} <br>Su contacto es: <br>Tel: ${req.body.telefono}<br>Correo: ${req.body.email}`
    }

    

    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transport.sendMail(mail);
    
    res.status(201).json({
      error: false,
      message: 'Mensaje enviado'
    });

  });

  module.exports = router;