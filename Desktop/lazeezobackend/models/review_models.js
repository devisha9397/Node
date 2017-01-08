var db=require('../dbconnection'); //reference of dbconnection.js
 
var Review={
 
getAllReview:function(callback){
 
return db.query("Select * from review_tbl",callback);
 
},
getReviewbyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from review_tbl where review_id=?",[id],callback);
},

addReview:function(Review,callback){

return db.query("insert into review_tbl(fk_user_email,fk_rest_id,review_message,review_date) values(?,?,?,?)",[Review.fk_user_email,Review.fk_rest_id,Review.review_message,Review.review_date],callback);
},
deleteReview:function(id,callback){

    return db.query("delete from review_date where review_id=?",[id]),callback;

},
updateReview:function(id,Review,callback){
  return db.query("update review_tbl set fk_user_email=?,fk_rest_id=?,review_message=?,review_date=? where review_id=?",[Review.fk_user_email,Review.fk_rest_id,Review.review_message,Review.review_date,id],callback);
 }
 
 
};
 module.exports=Review;