'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class friend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({user:user}) {
      // define association here
      this.belongsTo(user,{foreignKey:'userID'});

    }
  };
  friend.init({
    friendID: {DataTypes:INTEGER,primaryKey:true,allowNull:false,validate:{allowNull:'must have a friend id'}},
    userID: {DataTypes:INTEGER,forignKey:true,allowNull:false,validate:{allowNull:'must have a user id'}},
    accept: DataTypes.BOOLEAN,
    reject: DataTypes.BOOLEAN,
    block: DataTypes.BOOLEAN
  }, {
    sequelize,
    tableName:'friend',
    modelName: 'friend',
  });
  return friend;
};