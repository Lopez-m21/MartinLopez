const express = require ('express');
const router = express.Router();
const model = require('../model/Registro')();
router.get('/', (req,res) => {
    res.render('index.ejs', {
        nombre:'Axel'
    })
});
module.exports = router;