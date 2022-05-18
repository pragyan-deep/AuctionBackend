'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasOne(models.UserConfigs, {
        foreignKey: 'status'
      });
      Users.hasOne(models.UserConfigs, {
        foreignKey: 'type'
      });
      Users.belongsTo(models.Products, {
        foreignKey: 'id'
      })
      Users.hasMany(models.Auctions, {
        foreignKey: 'auctioneerId'
      })
    }
  }
  Users.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    password: DataTypes.STRING,
    type: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};