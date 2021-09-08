import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

// @description     Fetch all prdoucts
// @route           GET /api/products
// @access          public
router.get("/", asyncHandler( async (req, res) => {

    const products = await Product.find({});
    res.json(products);
}));

// @description     Fetch a single product
// @route           GET /api/products/:id
// @access          public
router.get("/:id", asyncHandler( async (req, res) => {

    // This read from product which was in an array in a .js file. 
    // Runs through array and tries to find item in array as per req.params.id (url parameters)
    //const product = products.find( p => p._id === req.params.id );
    
    // this finds id in mongo using the product model we created
    const product = await Product.findById(req.params.id);

    if (product){
        res.json(product);
    }
    else {
        res.status(404);
        throw new Error("Product not found");
    }
}));

export default router;