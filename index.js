const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

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


const productModel = mongoose.model('products',productSchema);

// Create
app.post("/api/products", async (req, res) => {

    // const body  =req.body;
    // to create anything in side model
    const product = await productModel.create({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        isInStock:req.body.isInStock,
        category : req.body.category
    });
    console.log(product)

    return res.status(201).json(product)
})



//get route
app.get("/api/products", async (req, res) => {
const allProducts = await productModel.find({category: "Laptops"});
return res.json(allProducts);
})


// get product by id
app.get("/api/products/:id" ,async (req,res)=>{
    const productId = await productModel.findById(req.params.id);
    return res.json(productId);
})


//

app.listen(8080,()=>{
    console.log("Server started on port 8080");
})