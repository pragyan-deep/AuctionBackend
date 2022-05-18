const db = require('../models/');
const Auctions = db.Auctions;
const AuctionConfigs = db.AuctionConfigs;
const Products = db.Products;
const Users = db.Users;

const getAll = async (req, res) => {
    try{
        return await Auctions.findAll({
            attributes: ['name'],
            include: [
                {
                    model: Products,
                    attributes: ['name']
                },
                {
                    model: Users, 
                    as: 'Auctioneer',
                    attributes: ['id', 'firstName', 'lastName']
                },
                {
                    model: AuctionConfigs,
                    attributes: ['name'],
                    as: 'Status'
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