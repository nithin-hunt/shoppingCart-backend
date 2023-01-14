const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

router.post("/add", async(req,res) => {
    try {
    const {name, description, productImage, date, brand, cost} = req.body;

    if(!name || !description || !productImage || !date || !brand || !cost) {
        return res.status(400).json("All fields are required");
    }

    if(!Number.isInteger(cost)) {
        return res.status(400).json("Cost should be a number");
    }

    let productsDetails = {
        name,
        description,
        productImage,
        date,
        brand,
        cost
    }

    const createdProduct = await Product.create(productsDetails);
    return res.status(201).json(createdProduct);

    } catch(e) {
        return res.status(400).json({error: e});
    }
})

module.exports= router;