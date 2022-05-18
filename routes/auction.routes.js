const express = require('express');
const router = express.Router();
const auction = require('../controllers/auction.controller')

router.get('/', async(req, res) => {
    try{
        const response = await auction.getAll();
        res.status(200).send(response)
    }catch(e){
        res.status(e.code).send(e.message)
    }
})

router.post('/', async(req, res) => {
    res.status(200).send("AUCTIONS")
})

router.patch('/', async(req, res) => {
    res.status(200).send("AUCTIONS")
})

module.exports = router;