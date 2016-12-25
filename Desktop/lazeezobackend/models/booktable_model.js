var db=require('../dbconnection'); //reference of dbconnection.js
 
var Booktable={
 
getAllBooktable:function(callback){
 
return db.query("Select * from booktable_tbl",callback);
 
},
addBooktable:function(Booktable,callback){

return db.query("insert into booktable_tbl(fk_user_email,fk_rest_id,date,no_of_people,time,additional_request) values(?,?,?,?,?,?)",[Booktable.fk_user_email,Booktable.fk_rest_id,Booktable.date,Booktable.no_of_people,Booktable.time,Booktable.additional_request],callback)
},
deleteBooktable:function(id,callback){

    return db.query("delete from booktable_tbl where table_id=?",[id]),callback;

},
updateBooktable:function(id,Booktable,callback){
  return db.query("update booktable_tbl set fk_user_email=?,fk_rest_id=?,date=?,no_of_people=?,time=?,additional_request=? where table_id=?",[Booktable.fk_user_email,Booktable.fk_rest_id,Booktable.date,Booktable.no_of_people,Booktable.time,Booktable.additional_request,id],callback);
 }
 
 
};
 module.exports=Booktable;