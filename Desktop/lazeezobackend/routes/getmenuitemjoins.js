var express = require('express');
 var router = express.Router();
 var Menuitem=require('../models/menuitem_models');

router.get('/:id?',function(req,res,next){

Menuitem.getMenuitemjoin(function(err,rows){

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