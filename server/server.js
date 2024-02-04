const express=require('express');
const cors=require('cors');
const app=express();
var nodemailer = require('nodemailer');
var mongo = require("mongoose");
const path=require('path')

var transporter = nodemailer.createTransport({
   service: 'gmail',
   port:465,
   secure:true,
   logger:true,
   debug:true,
   secureConnection:false,
   auth: {
     user: 'rohanardhapure83@gmail.com',
     pass: 'baft vzvu zrar xhnk'
   },
   tls:{
      rejectUnauthorized:true
   }
 });
transporter.verify(function(error, success) {
   if (error) {
         console.log(error);
   } else {
         console.log('Server is ready to take our messages');
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
