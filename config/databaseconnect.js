//Need the middleware mongoose for the db connection between the node and the database
const mongoose = require('mongoose');

//need the port details it means need the dot env
require('dotenv').config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    //Checking the process of the connection
    .then(()=>{
        console.log("Connection Established.");
    })
    .catch((error)=>{
        console.log("Error connecting the error");
        console.error(error.message);
        process.exit(1);
    })
}

module.exports = dbConnect;