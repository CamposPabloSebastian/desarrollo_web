var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/admin/login'); //redirec es para rediccionar a la url psada al iniciar app
});

module.exports = router;
