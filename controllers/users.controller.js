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
                {
                    model: Products,
                    attributes: ['name'],
                },
                {
                    model: Auctions,
                    attributes: ['name'],
                },
                {
                    model: UserConfigs,
                    as: 'Status'
                },
                {
                    model: UserConfigs,
                    as: 'Type'
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