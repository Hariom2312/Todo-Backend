// create Server
const express = require("express");
const app = express();

// load config from env file  or... agar nahi aaya to by default 4000 use krege
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// imports routes for TODO API
const todoRoutes = require("./routes/todo");

// mount ya add the todo API route
app.use("/api/v1",todoRoutes);

// start Server
app.listen(PORT,()=>{
  console.log(`Server started successfully ${PORT}`);
});

// connection the DB
const dbConnect = require("./config/database");
dbConnect();

// default Route 
app.get("/",(req,res)=>{
   res.send(`<h1> This is HomePage and Default Router </h1>`);
   //  console.log("Default Router");
});





