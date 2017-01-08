var db=require('../dbconnection'); //reference of dbconnection.js
 
var Category={
 
getAllCategory:function(callback){
 
return db.query("Select * from category_tbl",callback);
 
},
getCategorybyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from category_tbl where cat_id=?",[id],callback);
},
addCategory:function(Category,callback){
console.log(Category);
return db.query("insert into category_tbl(cusines) values(?)",[Category.cusines],callback);

},
deleteCategory:function(id,callback){

    return db.query("delete from category_tbl where cat_id=?",[id]),callback;

}, 
updateCategory:function(id,Category,callback){
  return db.query("update category_tbl set cusines=? where cat_id=?",[Category.cusines,id],callback);
 }
 
 
};
 module.exports=Category;