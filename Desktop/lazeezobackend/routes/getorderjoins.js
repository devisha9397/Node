  var express = require('express');
 var router = express.Router();
 var Order=require('../models/order_models');

router.get('/:id?',function(req,res,next){

Order.getOrderjoin(function(err,rows){

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