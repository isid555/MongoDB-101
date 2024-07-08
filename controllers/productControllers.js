const productModel = require("./models/product");







exports.createProducts =  async (req, res) => {

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
}


exports.getAllProducts = async (req, res) => {
    const allProducts = await productModel.find({});
    return res.json(allProducts);
}


exports.getById = async (req,res)=>{
    const productId = await productModel.findById(req.params.id);
    return res.json(productId);
}


exports.updateProduct = async (req,res)=>{
    const updatedProduct =    await productModel.findByIdAndUpdate(req.params.id , req.body);
    return res.json(updatedProduct);

}


  exports.deleteProduct =  async (req,res)=>{
    const deletedproduct =    await productModel.findByIdAndDelete(req.params.id);
    console.log("Product deleted !")
    return res.json(deletedproduct);

}