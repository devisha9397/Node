var express = require('express');
 var router = express.Router();
 var Menuphoto=require('../models/menuphoto_models');

router.get('/:id?',function(req,res,next){

     if(req.params.id){

     Menuphoto.getMenuphotobyid(req.params.id,function(err,rows){
 
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
Menuphoto.getAllMenuphoto(function(err,rows){

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

Menuphoto.addMenuphoto(req.body,function(err,count){

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

        Menuphoto.deleteMenuphoto(req.params.id,function(err,count){

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
 
Menuphoto.updateMenuphoto(req.params.id,req.body,function(err,rows){
 
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