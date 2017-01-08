var express = require('express');
 var router = express.Router();
 var Restaurant=require('../models/restaurant_models');

router.get('/:id?',function(req,res,next){
if(req.params.id){

     Restaurant.getRestaurantbyid(req.params.id,function(err,rows){
 
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

Restaurant.getAllRestaurant(function(err,rows){

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

Restaurant.addRestaurant(req.body,function(err,count){

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

        Restaurant.deleteRestaurant(req.params.id,function(err,count){

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
 
Restaurant.updateRestaurant(req.params.id,req.body,function(err,rows){
 
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