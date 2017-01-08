var db=require('../dbconnection'); //reference of dbconnection.js
 
var Otherphoto={
 
getAllOtherphoto:function(callback){
 
return db.query("Select * from otherphoto_tbl",callback);
  
}, 
getOtherphotobyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from otherphoto_tbl where other_id=?",[id],callback);
},
addOtherphoto:function(Otherphoto,callback){

return db.query("insert into otherphoto_tbl(otherpic_path,fk_rest_id) values(?,?)",[Otherphoto.otherpic_path,Otherphoto.fk_rest_id],callback);
},
deleteOtherphoto:function(id,callback){

    return db.query("delete from otherphoto_tbl where other_id=?",[id]),callback;

},
/*deleteallBooktable:function(id,callback)
{
    var delarr=[];
    var i=0;
    for(i=0;i<id.length;i++)
    {
        delarr[i]=id[i].table_id;
    }
    return db.query("delete from booktable_tbl where table_id in (?)",[delarr],callback);
},*/
updateOtherphoto:function(id,Otherphoto,callback){
  return db.query("update  otherphoto_tbl set otherpic_path=?,fk_rest_id=?",[Otherphoto.menupic_path,Otherphoto.fk_rest_id,id],callback);
 },
  
getDiscountjoin:function(callback)
{
    return db.query("select o.*,r.* from otherphoto_tbl as o,restaurant_tbl as r  where o.fk_rest_id=r.rest_id",callback);
}

}
 module.exports=Otherphoto;