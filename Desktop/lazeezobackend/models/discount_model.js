var db=require('../dbconnection'); //reference of dbconnection.js
 
var Discount={
 
getAllDiscount:function(callback){
 
return db.query("Select * from discount_tbl",callback);
  
}, 
getDiscountbyid:function(id,callback)//aa bdhi model ma nakhvu
{
return db.query("Select * from discount_tbl where discount_id=?",[id],callback);
},
addDiscount:function(Discount,callback){

return db.query("insert into discount_tbl(fk_rest_id,discount_desc) values(?,?)",[Discount.fk_rest_id,Discount.discount_desc],callback);
},
deleteDiscount:function(id,callback){

    return db.query("delete from discount_tbl where discount_id=?",[id]),callback;

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
updateDiscount:function(id,Discount,callback){
  return db.query("update discount_tbl set fk_rest_id=?,date=?,discount_desc=? where discount_id=?",[Discount.fk_rest_id,Discount.discount_desc,id],callback);
 },
  
getDiscountjoin:function(callback)
{
    return db.query("select d.*,r.* from discount_tbl as d,restaurant_tbl as r  where d.fk_rest_id=r.rest_id",callback);
}

}
 module.exports=Discount;