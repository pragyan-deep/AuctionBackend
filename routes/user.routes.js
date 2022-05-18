const express = require('express');
const router = express.Router();
const users = require('../controllers/users.controller')

/**
 * @api {get} /users
 * @apiGroup users
 * @apiDescription  Get all users
 *
 *  @apiParamExample {url} Request-Example:
 {server}/v1/users
 *     }

 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       TODO ADD DATA
 *     }
 */

 router.get('/', async(req, res) => {
    try{
        const response = await users.getAll();
        res.status(200).send(response)
    }catch(e){
        res.status(e.code || 400).send(e.message || 'Something went wrong')
    }
})

router.post('/', async(req, res) => {
    res.status(200).send("AUCTIONS")
})

router.patch('/', async(req, res) => {
    res.status(200).send("AUCTIONS")
})

module.exports = router;