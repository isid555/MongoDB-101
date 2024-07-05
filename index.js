const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://r555sid:baahubali@cluster0.4scnnfu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() =>{
    console.log("Connected to MongoDB");
})
.catch((err) =>{
    console.error("Failed"+err);
})


// Product Schema

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,

    },
    product_price :{
        type: String,
        required: true,
    },
    isInStock:{
        type: Boolean,
        required:true,
    },
    category :{
        type: String,
        required: true,
    }


})

const app = express();

app.listen(8086,()=>{
    console.log("Server started on port 8086");
})