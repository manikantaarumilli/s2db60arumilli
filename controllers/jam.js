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
exports.jam_create_post = async function(req, res) {
    console.log(req.body)
    let document = new jam();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.jam_name = req.body.jam_name;
    document.cost = req.body.cost;
    document.quantity = req.body.quantity;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    }; 
 
// Handle jam delete form on DELETE. 
exports.jam_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: jam delete DELETE ' + req.params.id); 
}; 
 
// Handle jam update form on PUT. 
exports.jam_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: jam update PUT' + req.params.id); 
}; 

// List of all jams
exports.jam_list = async function(req, res) {
    try{
    thejam = await jam.find();
    res.send(thejam);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };