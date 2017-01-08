var express = require('express');
 var router = express.Router();
 var Booktable=require('../models/booktable_model');

router.get('/:id?',function(req,res,next){


    if(req.params.id){

     Booktable.getBooktablebyid(req.params.id,function(err,rows){
 
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
Booktable.getAllBooktable(function(err,rows){

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

router.post('/:id?',function(req,res,next)
{
    if(req.params.id)
    {
        Booktable.deleteallBooktable(req.body,function(err,rows)
    {
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
        });
    }
    else{

            Booktable.addBooktable(req.body,function(err,count){

        if(err){

        res.json(err);
        }
        else    
        {   
        res.json(req.body);
        }

});
    }
});
router.delete('/:id',function(req,res,next){

        Booktable.deleteBooktable(req.params.id,function(err,count){

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
 
Booktable.updateBooktable(req.params.id,req.body,function(err,rows){
 
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