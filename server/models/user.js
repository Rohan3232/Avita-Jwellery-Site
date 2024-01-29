const mongo=require('mongoose');
const {Schema}=mongo;
const userSchema=new Schema({
    userid:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true 
    },
    cart:{
        type:Object
    },
    total:{
        type:Number
    },
    totalQuantity:{
        type:Number
    },
    totalDiscount:{
        type:Number
    }
})
const userModel=mongo.model('User',userSchema);
module.exports=userModel