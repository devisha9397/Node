
var express = require('express');
 var router = express.Router();
 var Fav=require('../models/discount_model');

router.get('/:id?',function(req,res,next){

Fav.getDiscountjoin(function(err,rows){

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