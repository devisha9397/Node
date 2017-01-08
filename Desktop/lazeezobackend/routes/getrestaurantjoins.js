 var express = require('express');
 var router = express.Router();
 var Restaurant=require('../models/restaurant_models');

router.get('/:id?',function(req,res,next){

Restaurant.getRestaurantjoin(function(err,rows){
   
    if (err)
    {
        res.json(err);
    }
    else
    {
        res.json(rows);
    }
});
}); 
module.exports=router; 