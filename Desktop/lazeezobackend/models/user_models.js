
var db=require('../dbconnection'); //reference of dbconnection.js
 
var User={
 
getAllUser:function(callback){
 
return db.query("Select * from user_tbl",callback);
 
},

getUserbyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from user_tbl where user_email=?",[id],callback);
},
addUser:function(User,callback){

return db.query("insert into user_tbl(user_email,user_name,password,address,mobile_no,gender,city,pro_pic,DOB) values(?,?,?,?,?,?,?,?,?)",[User.user_email,User.user_name,User.password,User.address,User.mobile_no,User.gender,User.city,User.pro_pic,User.DOB],callback);
},
deleteUser:function(id,callback){

    return db.query("delete from user_tbl where user_email=?",[id]),callback;

},
updateUser:function(id,User,callback){
  return db.query("update user_tbl set user_email=?,user_name=?,password=?,address=?,mobile_no=?,gender=?,city=?,pro_pic=?,DOB=? where table_id=?",[User.user_email,User.user_name,User.password,User.address,User.mobile_no,User.gender,User.city,User.pro_pic,User.DOB,id],callback);
 }
 
 
};
 module.exports=User;