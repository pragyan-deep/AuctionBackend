'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductConfigs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductConfigs.hasOne(models.Products, {
        foreignKey: 'status'
      })
      ProductConfigs.hasOne(models.Products, {
        foreignKey: 'type'
      })
    }
  }
  ProductConfigs.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductConfigs',
  });
  return ProductConfigs;
};