const db = require('../models/');
const userConfig = db.UsersConfigs

const getUserConfigs = async (req, res) => {
    try{
        return await userConfig.findAll()
    }catch(e){
        res.status(e.code).send(e.message)
    }
}

module.exports = {
    getUserConfigs
}