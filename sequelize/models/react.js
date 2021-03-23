'use strict';
const {
  Model, STRING, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class react extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({user:user,post:post}) {
      // define association here
      this.belongsTo(user,{foreignKey:'userID'});
      this.belongsTo(post,{foreignKey:'postID'});


    }
  };
  react.init({
    reactID: {type:DataTypes.INTEGER,primaryKey:true,allowNull:false,validate:{allowNull:'must have a react id'}},
    postID: {type:DataTypes.INTEGER,forignyKey:true,allowNull:false,validate:{allowNull:'must have a post id'}},
    userID: {type:DataTypes.INTEGER,forignyKey:true,allowNull:false,validate:{allowNull:'must have a user id'}},
    type: {type:DataTypes.STRING,allowNull:false,},
  }, {
    sequelize,
    tableName:'react',
    modelName: 'react',
  });
  return react;
};