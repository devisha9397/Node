var db=require('../dbconnection'); //reference of dbconnection.js
 
var Order={
 
getAllOrder:function(callback){
 
return db.query("Select * from order_tbl",callback);
 
},
addOrder:function(Order,callback){

return db.query("insert into order_tbl(fk_rest_id,fk_user_email,fk_item_id,item_name,quantity,total_amount,flag,date_of_order,delivery_area) values(?,?,?,?,?,?,?,?,?)",[Order.fk_rest_id,Order.fk_user_email,Order.fk_item_id,Order.item_name,Order.quantity,Order.total_amount,Order.flag,Order.date_of_order,Order.delivery_area],callback)
},
deleteOrder:function(id,callback){

    return db.query("delete from order_tbl where order_id=?",[id]),callback;

},
updateOrder:function(id,Order,callback){
  return db.query("update order_id set fk_rest_id=?,fk_user_email=?,fk_item_id=?,item_name=?,quantity=?,total_amount=?,flag=?,date_of_order=?,delivery_area=? where order_id=?",[Order.fk_rest_id,Order.fk_user_email,Order.fk_item_id,Order.item_name,Order.quantity,Order.total_amount,Order.flag,Order.date_of_order,Order.delivery_area],callback);
 }
 
 
};
 module.exports=Order;