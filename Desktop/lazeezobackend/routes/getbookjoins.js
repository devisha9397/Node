var express = require('express');
 var router = express.Router();
 var Booktable=require('../models/booktable_model');

router.get('/:id?',function(req,res,next){

Booktable.getBooktablejoin(function(err,rows){
  
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