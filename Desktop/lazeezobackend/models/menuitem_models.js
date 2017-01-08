var db=require('../dbconnection'); //reference of dbconnection.js
 
var Menuitem={
 
getAllMenuitem:function(callback){
 
return db.query("Select * from menuitem_tbl",callback);
 
},

getMenuitembyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from menuitem_tbl where item_id=?",[id],callback);
},
addMenuitem:function(Menuitem,callback){

return db.query("insert into menuitem_tbl(fk_rest_id,item_name,item_price) values(?,?,?)",[Menuitem.fk_rest_id,Menuitem.item_name,Menuitem.item_price]),callback;
},
deleteMenuitem:function(id,callback){

    return db.query("delete from menuitem_tbl where item_id=?",[id],callback);

},
updateMenuitem:function(id,Menuitem,callback){
  return db.query("update menuitem_tbl set fk_rest_id=?,item_name=?,item_price=? where item_id=?",[Menuitem.fk_rest_id,Menuitem.item_name,Menuitem.item_price,id],callback);
 },

getMenuitemjoin:function(callback)
{
    return db.query("select m.*,r.* from menuitem_tbl as m,restaurant_tbl as r  where m.fk_rest_id=r.rest_id",callback);
}
 
 
};
 module.exports=Menuitem;