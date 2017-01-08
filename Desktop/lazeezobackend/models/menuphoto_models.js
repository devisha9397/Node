var db=require('../dbconnection'); //reference of dbconnection.js
 
var Menuphoto={
 
getAllMenuphoto:function(callback){
 
return db.query("Select * from menuphoto_tbl",callback);
  
}, 
getMenuphotobyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from menuphoto_tbl where menu_id=?",[id],callback);
},
addMenuphoto:function(Menuphoto,callback){

return db.query("insert into menuphoto_tbl(menupic_path,fk_rest_id) values(?,?)",[Menuphoto.menupic_path,Menuphoto.fk_rest_id],callback);
},
deleteDiscount:function(id,callback){

    return db.query("delete from discount_tbl where discount_id=?",[id]),callback;

},
/*deleteallBooktable:function(id,callback)
{
    var delarr=[];
    var i=0;
    for(i=0;i<id.length;i++)
    {
        delarr[i]=id[i].table_id;
    }
    return db.query("delete from booktable_tbl where table_id in (?)",[delarr],callback);
},*/
updateMenuphoto:function(id,Menuphoto,callback){
  return db.query("update  menuphoto_tbl set menupic_path=?,fk_rest_id=?",[Menuphoto.menupic_path,Menuphoto.fk_rest_id,id],callback);
 },
  
getDiscountjoin:function(callback)
{
    return db.query("select m.*,r.* from menuphoto_tbl as m,restaurant_tbl as r  where m.fk_rest_id=r.rest_id",callback);
}

}
 module.exports=Menuphoto;