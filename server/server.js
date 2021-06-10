console.clear();
const express= require ("express");
require('dotenv').config()
const connectDB=require ("./config/connectDB")

const app= express();

// 1-connectingDB
connectDB();

// 2- body parser .json
app.use(express.json());

// 3-create routes
app.use ("/userModel", require("./routes/userModel"));
app.use ("/userCompany", require("./routes/userCompany"));


// 4-running server
const PORT= process.env.PORT
app.listen(PORT, (err)=> 
err? console.error(err)
: console.log(`server is running on ${PORT}`)

);