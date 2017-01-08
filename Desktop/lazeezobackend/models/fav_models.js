var db=require('../dbconnection'); //reference of dbconnection.js
 
var Fav={
 
getAllFav:function(callback){
 
return db.query("Select * from fav_tbl",callback);
  
}, 
getFavbyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from fav_tbl where fav_id=?",[id],callback);
},
addFav:function(Fav,callback){

return db.query("insert into fav_tbl(fk_rest_id,fk_user_email) values(?,?)",[ Fav.fk_rest_id ,Fav.fk_user_email],callback);
},
deleteFav:function(id,callback){

    return db.query("delete from fav_tbl where fav_id=?",[id]),callback;

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
updateFav:function(id,Fav,callback){
  return db.query("update  fav_tbl set otherpic_path=?,fk_rest_id=?",[Fav.fk_rest_id ,Fav.fk_user_email,id],callback);
 },
  
getFavjoin:function(callback)
{
    return db.query("select f.*,r.* from fav_tbl as p,restaurant_tbl as r  where f.fk_rest_id=r.rest_id",callback);
}

}
 module.exports=Fav;