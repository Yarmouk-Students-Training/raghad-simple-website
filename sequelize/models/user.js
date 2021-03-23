'use strict';
const {
  Model, STRING, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
   
      static associate({friend:friend,post:post,comment:comment,react:react}) {
        // define association here
        this.hasMany(friend,{foreignKey:'userID'});
        this.hasMany(post,{foreignKey:'userID'});
        this.hasMany(comment,{foreignKey:'userID'});
        this.hasMany(react,{foreignKey:'userID'});
        
      }
    }
  };

  user.init({
    userID: {type:DataTypes.INTEGER,primaryKey:true,allowNull:false,validate:{allowNull:'must have a user id'}},
    name: {type:DataTypes.STRING,allowNull:false,validate:{allowNull:'must have a user name'}},
    email: {type:DataTypes.STRING,primaryKey:true,allowNull:false,validate:{allowNull:'must have a user email'}},
    password: {type:DataTypes.STRING,allowNull:false,validate:{allowNull:'must have a user password'}},
  }, {
    sequelize,
    tableName:'user',
    modelName:'user',
  });{
  return user;
};