const db = require('../models/');
const Products = db.Products;
const ProductConfigs = db.ProductConfigs;
const Auctions = db.Auctions;
const Users = db.Users;

const getAll = async (req, res) => {
    try{
        // return await Products.findAll()
        return await Products.findAll({
            attributes: ['name'],
            include: [
                {
                    model: Auctions,
                    attributes: ['name'],
                },
                {
                    model: ProductConfigs,
                    as: 'Status'
                },
                {
                    model: ProductConfigs,
                    as: 'Type'
                },
                {
                    model: Users,
                    attributes: ['firstName', 'lastName'],
                    as: 'Buyer'
                }
            ]
        })
    }catch(e){
        console.log(e)
        res.status(e.code || 400).send(e.message || 'something went wrong')
    }
}

module.exports = {
    getAll
}