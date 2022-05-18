'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersConfigs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UsersConfigs.hasOne(models.Users, {
        foreignKey: 'status'
      })
      UsersConfigs.hasOne(models.Users, {
        foreignKey: 'type'
      })
    }
  }
  UsersConfigs.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserConfigs',
  });
  return UsersConfigs;
};