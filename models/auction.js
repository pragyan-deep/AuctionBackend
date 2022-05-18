'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Auctions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Auctions.belongsTo(models.AuctionConfigs, {
        foreignKey: 'status',
        as: 'Status'
      });
      Auctions.belongsTo(models.Users, {
        foreignKey: 'auctioneerId',
        as: 'Auctioneer'
      })
      Auctions.hasMany(models.Products, {
        foreignKey: 'auctionId'
      })
    }
  }
  Auctions.init({
    name: DataTypes.STRING,
    auctioneerId: DataTypes.STRING,
    startDateTime: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Auctions',
  });
  return Auctions;
};