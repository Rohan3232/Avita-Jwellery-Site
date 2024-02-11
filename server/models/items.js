const mongo=require('mongoose');
const {Schema}=mongo;
const allitemsSchema=new Schema({
  MenuItems:{
    type:Object
   } 
})
const allitems=mongo.model('dataList',allitemsSchema);
module.exports=allitems;