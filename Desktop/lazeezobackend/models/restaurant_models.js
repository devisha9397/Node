var db=require('../dbconnection'); //reference of dbconnection.js
 
var Restaurant={
 
getAllRestaurant:function(callback){
 
return db.query("Select * from restaurant_tbl",callback);
 
},

getRestaurantbyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from restaurant_tbl where rest_id=?",[id],callback);
},

addRestaurant:function(Restaurant,callback){

return db.query("insert into restaurant_tbl(fk_owner_email,fk_cat_id,rest_name,rest_add,pincode,rest_number,rest_email,opening_status) values(?,?,?,?,?,?,?,?)",[Restaurant.fk_owner_email,Restaurant.fk_cat_id,Restaurant.rest_name,Restaurant.rest_add,Restaurant.pincode,Restaurant.rest_number,Restaurant.rest_email,Restaurant.opening_status],callback);
},
deleteRestaurant:function(id,callback){

    return db.query("delete from restaurant_tbl where rest_id=?",[id]),callback;

},
updateRestaurant:function(id,Restaurant,callback){
  return db.query("update restaurant_tbl set fk_owner_email=?,fk_cat_id=?,rest_name=?,rest_add=?,pincode=?,rest_number=?,rest_email=?,opening_status=? where rest_id=?",[Restaurant.fk_owner_email,Restaurant.fk_cat_id,Restaurant.fk_review_id,Restaurant.rest_name,Restaurant.rest_add,Restaurant.pincode,Restaurant.rest_number,Restaurant.rest_email,Restaurant.opening_status,Restaurant.main_photo,Restaurant.menu_photo,Restaurant.other_photos,id],callback);
 }, 

getRestaurantjoin:function(callback)
{
    return db.query("select c.*,rest.* from category_tbl as c,restaurant_tbl as rest  where rest.fk_cat_id=c.cat_id ",callback);
}
 
   
};
 module.exports=Restaurant;