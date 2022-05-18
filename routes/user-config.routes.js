const express = require('express');
const router = express.Router();
const userConfig = require('../controllers/user-config.controller')

/**
 * @api {get} /user-configs
 * @apiGroup users
 * @apiDescription  Get all user configs
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
        const response = userConfig.getUserConfigs();
        res.status(200).send(response)
    }catch(e){
        res.status(e.code).send(e.message)
    }
    
})

router.post('/', async(req, res) => {
    res.status(200).send("USERS")
})

router.patch('/', async(req, res) => {
    res.status(200).send("USERS")
})

module.exports = router;