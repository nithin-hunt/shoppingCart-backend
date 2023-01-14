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
});

router.get("/", async (req,res) => {
    try {
        const products = await Product.findAll();
        return res.status(200).json(products);
    } catch (e) {
        return res.status(400).json({error: e});
    }
});

router.get("/:id", async (req,res) => {
    try {
        const product = await Product.findOne({where: {id: req.params.id}});
        if(!product) {
            return res.status(404).json("No product found");
        }

        return res.status(200).json(product);
    } catch (e) {
        return res.status(400).json({error: e});
    }
});

module.exports= router;