var express = require('express');
const jam_controlers= require('../controllers/jam'); 
var router = express.Router();

/* GET home page. */



router.get('/', jam_controlers.jam_view_all_Page ); 
router.get('/detail', jam_controlers.jam_view_one_Page); 
router.get('/create', jam_controlers.jam_create_Page); 
router.get('/update', jam_controlers.jam_update_Page); 
router.get('/delete', jam_controlers.jam_delete_Page); 
/*
router.get('/', function (req, res, next) {
    res.render('jam', { title: 'search result'});
});  */

module.exports = router;