const express=require('express');
const cors=require('cors');
const app=express();
var mongo = require("mongoose");
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
connectDB();
const corsConf = {
   origin: "*",
   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
   preflightContinue: false,
 }
 
 app.use(cors(corsConf));
app.use(express.json());
app.use('/',require('./routes/authRoutes'));
const port=8000;
app.listen(port,()=>console.log(`Server is running on port ${port}`));
