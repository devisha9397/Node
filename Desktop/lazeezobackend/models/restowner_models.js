var db=require('../dbconnection'); //reference of dbconnection.js
 
var Restowner={
 
getAllRestowner:function(callback){
 
return db.query("Select * from restowner_tbl",callback);
 
},
addRestowner:function(Restowner,callback){

return db.query("insert into restowner_tbl(owner_email,fk_rest_id,rest_owner_name,owner_mob_no) values(?,?,?,?)",[Restowner.owner_email,Restowner.owner_email,Restowner.fk_rest_id,Restowner.rest_owner_name,Restowner.owner_mob_no],callback)
},
deleteRestowner:function(id,callback){

    return db.query("delete from restowner_tbl where owner_email=?",[id]),callback;

},
updateRestowner:function(id,Restowner,callback){
  return db.query("update restowner_tbl set owner_email=?,fk_rest_id=?,rest_owner_name=?,owner_mob_no=? where table_id=?",[Restowner.owner_email,Restowner.fk_rest_id,Restowner.rest_owner_name,Restowner.owner_mob_no],callback);
 }
 
 
};
 module.exports=Restowner;