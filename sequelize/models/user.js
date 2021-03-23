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
        this.hasMany(Post,{foreignKey:'userID'});
        this.hasMany(Comment,{foreignKey:'userID'});
        this.hasMany(React,{foreignKey:'userID'});
        
      }
    }
  };

  user.init({
    userID: {DataTypes:INTEGER,primaryKey:true,allowNull:false,validate:{allowNull:'must have a user id'}},
    name: {DataTypes:STRING,allowNull:false,validate:{allowNull:'must have a user name'}},
    email: {DataTypes:STRING,primaryKey:true,allowNull:false,validate:{allowNull:'must have a user email'}},
    password: {DataTypes:STRING,allowNull:false,validate:{allowNull:'must have a user password'}},
  }, {
    sequelize,
    tableName:'user',
    modelName:'user',
  });{
  return user;
};