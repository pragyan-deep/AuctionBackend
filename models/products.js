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
      Products.hasOne(models.ProductConfigs, {
        foreignKey: 'id'
      });
      Products.hasOne(models.ProductConfigs, {
        foreignKey: 'id'
      })
      Products.hasOne(models.Auctions, {
        foreignKey: 'id'
      })
      Products.hasOne(models.Users, {
        foreignKey: 'id',
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