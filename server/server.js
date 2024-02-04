const express=require('express');
const cors=require('cors');
const app=express();
var nodemailer = require('nodemailer');
var mongo = require("mongoose");
const path=require('path')
var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
     user: 'justvarad@gmail.com',
     pass: 'varad1999'
   }
 });
 

const connectDB = async () =>{
   try{
      mongo.connect("mongodb+srv://user123:user123@atlascluster.5lvz3ep.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser:true,
   useUnifiedTopology:true});
   console.log('MongoDB connection Success');
   }
   catch(err){
      console.log('MongoDB failed to connect')
      process.exit(1);
   }
}
app.use(cors({
        credentials:true,
        origin:'https://jwellerysite.onrender.com'
    }
));
connectDB();
app.use(express.json());
app.use('/',require('./routes/authRoutes'));
const port=8000;
app.listen(port,()=>console.log(`Server is running on port ${port}`));
