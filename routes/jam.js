var express = require('express');
const jam_controlers= require('../controllers/jam'); 
var router = express.Router();

/* GET home page. */

router.get('/', jam_controlers.jam_view_all_Page ); 
/*
router.get('/', function (req, res, next) {
    res.render('jam', { title: 'search result'});
});  */

module.exports = router;