var db=require('../dbconnection'); //reference of dbconnection.js
 
var Restaurant={
 
getAllRestaurant:function(callback){
 
return db.query("Select * from restaurant_tbl",callback);
 
},
addRestaurant:function(Restaurant,callback){

return db.query("insert into restaurant_tbl(fk_owner_email,fk_cat_id,fk_review_id,rest_name,rest_add,pincode,rest_number,rest_email,opening_status,main_photo,menu_photo,other_photos) values(?,?,?,?,?,?)",[Restaurant.fk_owner_email,Restaurant.fk_cat_id,Restaurant.fk_review_id,Restaurant.rest_name,Restaurant.rest_add,Restaurant.pincode,Restaurant.rest_number,Restaurant.rest_email,Restaurant.opening_status,Restaurant.main_photo,Restaurant.menu_photo,Restaurant.other_photos],callback)
},
deleteRestaurant:function(id,callback){

    return db.query("delete from restaurant_tbl where rest_id=?",[id]),callback;

},
updateRestaurant:function(id,Restaurant,callback){
  return db.query("update restaurant_tbl set fk_owner_email=?,fk_cat_id=?,fk_review_id=?,rest_name=?,rest_add=?,pincode=?,rest_number=?,rest_email=?,opening_status=?,main_photo=?,menu_photo=?,other_photos=? where table_id=?",[Restaurant.fk_owner_email,Restaurant.fk_cat_id,Restaurant.fk_review_id,Restaurant.rest_name,Restaurant.rest_add,Restaurant.pincode,Restaurant.rest_number,Restaurant.rest_email,Restaurant.opening_status,Restaurant.main_photo,Restaurant.menu_photo,Restaurant.other_photos],callback);
 }
 
 
};
 module.exports=Restaurant;