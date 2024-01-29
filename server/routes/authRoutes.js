const express=require('express');
const router=express.Router();
const cors=require('cors');
const User=require('../models/user')

//middleware
router.use(
    cors({
        credentials:false,
        origin:'https://jwellerysite.onrender.com/'
    })
)
router.get('/',(req,res)=>{
    res.json('test is working');
})
router.post('/register',async (req,res)=>{
    try{
        const {userid,password,cart,total,totalQuantity,totalDiscount}=req.body;
        if(!password || password.length < 6){
            return res.json({
                error:'Password is required and should be at least 6 characters long'
            })
        }
        const exist = await User.findOne({userid})
        if(exist)
        {
            return res.json({
                error:'Mobile Number already exist'
            })
        }
        const user=await User.create({
            userid,password,cart,total,totalQuantity,totalDiscount
        })
        return res.json(user)
    }
    catch(error){
            console.log(error)
    }
})
router.post('/login',async (req,res)=>{
    try{
        const {userid,password}=req.body;
        const user = await User.findOne({userid})
        if(!user)
        {
            return res.json({
                error:'No User Found'
            })
        }
        const password1=await User.findOne({userid,password});
        if(password1==null)
        {
            return res.json({
                error:'Password Incorrect'
            })
        }
        return res.json(password1)
    }
    catch(error){
            console.log(error)
    }
})
router.post('/updatecart',async (req,res)=>{
    try{
        const {userid,cart,total,totalQuantity,totalDiscount}=req.body;
        const exist = await User.findOne({userid})
        if(!exist)
        {
            return res.json({
                error:'No User Found'
            })
        }
        const user=await User.updateOne({
            userid:userid},{
           $set: {cart:cart,
            total:total,totalQuantity:totalQuantity,totalDiscount:totalDiscount}
        })
        return res.json(user)
    }
    catch(error){
            console.log(error)
    }
})
router.post('/resetpass',async (req,res)=>{
    try{
        const {userid,password,oldpassword}=req.body;
        const exist = await User.findOne({userid,oldpassword})
        if(!exist)
        {
            return res.json({
                error:'No User Found'
            })
        }
        const user=await User.updateOne({
            userid:userid},{
           $set: {password:password}
        })
        return res.json(user)
    }
    catch(error){
            console.log(error)
    }
})

module.exports=router;
