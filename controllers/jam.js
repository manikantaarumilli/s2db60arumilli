var jam = require('../models/jam'); 
 
// List of all jams 
exports.jam_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: jam list'); 
}; 
 
// for a specific jam. 
exports.jam_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await jam.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
exports.jam_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await jam.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.name)  
               toUpdate.name = req.body.name; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.quantity) toUpdate.quantity = req.body.quantity; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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

    // VIEWS 
// Handle a show all view 
exports.jam_view_all_Page = async function(req, res) { 
    try{ 
        thejam = await jam.find(); 
        res.render('jam', { title: 'jam Search Results', results: thejam }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 