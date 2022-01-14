var express = require('express');
var router = express.Router();

router.get('/', (req, res, next)=>{
    res.render('admin/login', {
        layout: 'admin/layout',
    });
});

module.exports = router;