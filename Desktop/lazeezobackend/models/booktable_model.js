var db=require('../dbconnection'); //reference of dbconnection.js
 
var Booktable={
 
getAllBooktable:function(callback){
 
return db.query("Select * from booktable_tbl",callback);
  
}, 
getBooktablebyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from booktable_tbl where table_id=?",[id],callback);
},
addBooktable:function(Booktable,callback){

return db.query("insert into booktable_tbl(fk_user_email,fk_rest_id,date,no_of_people,time,additional_request) values(?,?,?,?,?,?)",[Booktable.fk_user_email,Booktable.fk_rest_id,Booktable.date,Booktable.no_of_people,Booktable.time,Booktable.additional_request],callback);
},
deleteBooktable:function(id,callback){

    return db.query("delete from booktable_tbl where table_id=?",[id]),callback;

},
deleteallBooktable:function(id,callback)
{
    var delarr=[];
    var i=0;
    for(i=0;i<id.length;i++)
    {
        delarr[i]=id[i].table_id;
    }
    return db.query("delete from booktable_tbl where table_id in (?)",[delarr],callback);
},
updateBooktable:function(id,Booktable,callback){
  return db.query("update booktable_tbl set fk_user_email=?,fk_rest_id=?,date=?,no_of_people=?,time=?,additional_request=? where table_id=?",[Booktable.fk_user_email,Booktable.fk_rest_id,Booktable.date,Booktable.no_of_people,Booktable.time,Booktable.additional_request,id],callback);
 },
  
getBooktablejoin:function(callback)
{
    return db.query("select b.*,r.* from booktable_tbl as b,restaurant_tbl as r  where b.fk_rest_id=r.rest_id",callback);
}

}
 module.exports=Booktable;