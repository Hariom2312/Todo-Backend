const mongoose = require('mongoose');

require("dotenv").config();

const dbConnect = async()=>{
    try{  
       await mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser :true,
        useUnifiedTopology : true,  
       });
       console.log("✌️  CONNECTED TO DATABASE SUCCESSFULLY");
    } catch(err){
         console.log("Error Received issue in DB connection");
         console.error(err.message);
          //  ye kuch new he
         process.exit(1);
    }
}

module.exports = dbConnect;
