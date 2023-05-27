//Require of the express to run the server
const express = require('express');
const app = express();

//Require the PORT details from the process env space
require('dotenv').config();
const PORT = process.env.PORT || 5000

//Parsing the data we need the parser
app.use(express.json())

//Need the route details
const Blogroute = require('./Routes/blog');

//Need to mount the route for the versioning
app.use("/api/v1",Blogroute);

//Start the server on some port
app.listen(PORT,()=>{
    console.log(`Server is running on the ${PORT}`);
})

//Need to connect the database
const dbConnect = require("./config/databaseconnect");
dbConnect();

//Initialize the default routes for getting the page render
app.get("/",(req,res)=>{
    res.send(`<h1>Welcome to the blog Page::</h1>`);
})