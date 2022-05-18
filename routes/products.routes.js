const express = require('express');
const router = express.Router();
const products = require('../controllers/product.controller')

router.get('/', async(req, res) => {
    try{
        const response = await products.getAll();
        res.status(200).send(response)
    }catch(e){
        res.status(e.code).send(e.message)
    }
})

router.post('/', async(req, res) => {
    res.status(200).send("PRODUCTS")
})

router.patch('/', async(req, res) => {
    res.status(200).send("PRODUCTS")
})

module.exports = router;