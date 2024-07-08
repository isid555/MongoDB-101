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
const allProducts = await productModel.find({});
return res.json(allProducts);
})


// get product by id
app.get("/api/products/:id" ,async (req,res)=>{
    const productId = await productModel.findById(req.params.id);
    return res.json(productId);
})


//update product
app.put("/api/products/:id",async (req,res)=>{
 const updatedProduct =    await productModel.findByIdAndUpdate(req.params.id , req.body);
 return res.json(updatedProduct);

})



//delete the product
app.delete("/api/products/:id" ,async (req,res)=>{
 const deletedproduct =    await productModel.findByIdAndDelete(req.params.id);
     console.log("Product deleted !")
    return res.json(deletedproduct);

})

app.listen(8080,()=>{
    console.log("Server started on port 8080");
})