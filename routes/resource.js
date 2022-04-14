var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var jam_controller = require('../controllers/jam'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/jam', jam_controller.jam_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/jam/:id', jam_controller.jam_delete); 
 
// PUT request to update Costume. 
router.put('/jam/:id', jam_controller.jam_update_put); 
 
// GET request for one Costume. 
router.get('/jam/:id', jam_controller.jam_detail); 
 
// GET request for list of all Costume items. 
router.get('/jam', jam_controller.jam_list); 
 
module.exports = router; 