var express = require('express');
 var router = express.Router();
 var Otherphoto=require('../models/otherphoto_models');

router.get('/:id?',function(req,res,next){

     if(req.params.id){

     Otherphoto.getOtherphotobyid(req.params.id,function(err,rows){
 
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
Otherphoto.getAllOtherphoto(function(err,rows){

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

Otherphoto.addOtherphoto(req.body,function(err,count){

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

        Otherphoto.deleteOtherphoto(req.params.id,function(err,count){

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
 
Otherphoto.updateOtherphoto(req.params.id,req.body,function(err,rows){
 
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