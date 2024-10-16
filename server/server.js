const express=require('express');
const dotenv=require('dotenv');
dotenv.config()
const config={
   origin:process.env['REACT_APP_ORIGIN_URL']
}
const cors=require('cors');
const app=express();
var mongo = require("mongoose");
const path=require('path')
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
        origin:config.origin
    }
));
connectDB();
app.use(express.json());
app.use('/',require('./routes/authRoutes'));
const port=8000;
app.listen(port,()=>console.log(`Server is running on port ${port}`));
