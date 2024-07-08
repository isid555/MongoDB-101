const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {})
.then(() =>{
    console.log("Connected to MongoDB");
})
.catch((err) =>{
    console.error("Failed"+err);
})





app.listen(8080,()=>{
    console.log("Server started on port 8080");
})