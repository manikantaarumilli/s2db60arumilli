var express = require('express');
const jam_controlers= require('../controllers/jam'); 
var router = express.Router();
// A little function to check if we have an authorized user and continue on  
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET home page. */



router.get('/', jam_controlers.jam_view_all_Page ); 
router.get('/detail', jam_controlers.jam_view_one_Page); 
router.get('/create',secured, jam_controlers.jam_create_Page); 
router.get('/update',secured, jam_controlers.jam_update_Page); 
router.get('/delete',secured, jam_controlers.jam_delete_Page); 
/*
router.get('/', function (req, res, next) {
    res.render('jam', { title: 'search result'});
});  */

module.exports = router;