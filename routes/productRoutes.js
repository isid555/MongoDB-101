const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');



// Create
router.post("/api/products", productController.createProducts);



//get route
router.get("/api/products", productController.getAllProducts);


// get product by id
router.get("/api/products/:id" ,productController.getById)


//update product
router.put("/api/products/:id",productController.updateProduct)



//delete the product
router.delete("/api/products/:id" ,productController.deleteProduct)
