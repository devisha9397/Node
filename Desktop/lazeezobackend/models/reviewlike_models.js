var db=require('../dbconnection'); //reference of dbconnection.js
 
var Reviewlike={
 
getAllReviewlike:function(callback){
 
return db.query("Select * from reviewlike_tbl",callback);
 
},
addReviewlike:function(Reviewlike,callback){

return db.query("insert into reviewlike_tbl(fk_review_id,fk_user_email,fk_rest_id,) values(?,?,?)",[Reviewlike.fk_review_id,Reviewlike.fk_user_email,Reviewlike.fk_rest_id],callback);
},
deleteReviewlike:function(id,callback){

    return db.query("delete from reviewlike_tbl where like_id=?",[id]),callback;

},
updateReviewlike:function(id,Reviewlike,callback){
  return db.query("update reviewlike_tbl set fk_review_id=?,fk_user_email=?,fk_rest_id=?",[Reviewlike.fk_review_id,Reviewlike.fk_user_email,Reviewlike.fk_rest_id],callback);
 }
 
 
};
 module.exports=Reviewlike;