var db=require('../dbconnection'); //reference of dbconnection.js
 
var Category={
 
getAllCategory:function(callback){
 
return db.query("Select * from category_tbl",callback);
 
},
addCategory:function(Category,callback){

return db.query("insert into category_tbl(fk_rest_id,cusines,cost,hours,known_for,spotlight) values(?,?,?,?,?,?)",[Category.fk_rest_id,Category.cusines,Category.cost,Category.hours,Category.known_for,Category.spotlight])
},
deleteCategory:function(id,callback){

    return db.query("delete from category_tbl where cat_id=?",[id]),callback;

},
updateCategory:function(id,Category,callback){
  return db.query("update category_tbl set fk_rest_id=?,cusines=?,cost=?,hours=?,known_for=?,spotlight=? where cat_id=?",[Category.fk_rest_id,Category.cusines,Category.cost,Category.hours,Category.known_for,Category.spotlight,callback]);
 }
 
 
};
 module.exports=Category;