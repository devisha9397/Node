var express = require('express');
 var router = express.Router();
 var Discount=require('../models/discount_model');

router.get('/',function(req,res,next){

if(req.params.id){

     Discount.getDiscountbyid(req.params.id,function(err,rows){
 
if(err) 
  { 
  res.json(err);
  }
  else 
  {
  res.json(rows);
  }
  });
 }
 else
 {
Discount.getAllDiscount(function(err,rows){

    if (err)
    {
        res.json(err);
    }
    else
    {
        res.json(rows);
    }
});
 } 
}); 


router.post('/',function(req,res,next){

Discount.addDiscount(req.body,function(err,count){

if(err){

    res.json(err);
}
else
{
    res.json(req.body);
}

});

});

router.delete('/:id',function(req,res,next){

        Discount.deleteDiscount(req.params.id,function(err,count){

                if(err){
                    res.json(err);
                }
                else
                {
                    res.json(count);
                }
        });
});

router.put('/:id',function(req,res,next){
 
Discount.updateDiscount(req.params.id,req.body,function(err,rows){
 
if(err)
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