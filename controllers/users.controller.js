const db = require('../models/');
const Users = db.Users;
const Auctions = db.Auctions;
const Products = db.Products;
const UserConfigs = db.UserConfigs;

const getAll = async (req, res) => {
    try{
        return await Users.findAll({
            attributes: ['firstName'],
            include: [
                // {model: UserConfigs},
                // {model: Products}
                {
                    model: Auctions,
                    attributes: ['name'],
                }
            ]
        })
    }catch(e){
        console.log("ERROR===>", e)
        res.status(e.code).send(e.message)
    }
}

module.exports = {
    getAll
}