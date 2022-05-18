'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.belongsTo(models.ProductConfigs, {
        foreignKey: 'status',
        as: 'Status'
      });
      Products.belongsTo(models.ProductConfigs, {
        foreignKey: 'type',
        as: 'Type'
      })
      Products.belongsTo(models.Auctions, {
        foreignKey: 'auctionId'
      })
      Products.belongsTo(models.Users, {
        foreignKey: 'buyerId',
        as: 'Buyer'
      })
    }
  }
  Products.init({
    name: DataTypes.STRING,
    initialPrice: DataTypes.DOUBLE,
    finalPrice: DataTypes.DOUBLE,
    auctionId: DataTypes.STRING,
    buyerId: DataTypes.STRING,
    type: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};