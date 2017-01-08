var express = require('express');
 var router = express.Router();
 var Booktable=require('../models/reviewlike_models');

router.get('/',function(req,res,next){
    

Reviewlike.getAllReviewlike(function(err,rows){

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


router.post('/',function(req,res,next){

Reviewlike.addReviewlike(req.body,function(err,count){

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

        Reviewlike.deleteReviewlike(req.params.id,function(err,count){

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
 
Reviewlike.updateReviewlike(req.params.id,req.body,function(err,rows){
 
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