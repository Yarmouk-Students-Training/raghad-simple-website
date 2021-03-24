'use strict';
const {
  Model, INTEGER, ENUM
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class friend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({user,group}) {
      // define association here

    }
  };
  
  friend.init({
    action:DataTypes.ENUM('accept', 'reject' ,'Block')
  }, {
    sequelize,
    tableName:'friend',
    modelName: 'friend',
  });
  return friend;
};