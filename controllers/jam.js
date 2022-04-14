var jam = require('../models/jam'); 
 
// List of all jams 
exports.jam_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: jam list'); 
}; 
 
// for a specific jam. 
exports.jam_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: jam detail: ' + req.params.id); 
}; 
 
// Handle jam create on POST. 
exports.jam_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: jam create POST'); 
}; 
 
// Handle jam delete form on DELETE. 
exports.jam_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: jam delete DELETE ' + req.params.id); 
}; 
 
// Handle jam update form on PUT. 
exports.jam_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: jam update PUT' + req.params.id); 
}; 