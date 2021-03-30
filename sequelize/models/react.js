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
    static associate({user,post}) {
      // define association here
      this.belongsTo(user,{foreignKey:'userID'});
      this.belongsTo(post,{foreignKey:'postID'});


    }
  };
  react.init({
    reactID: {type:DataTypes.INTEGER,primaryKey:true,allowNull:false,autoIncrement:true},
    type: {type: DataTypes.STRING,allowNull:false,},
  }, {
    sequelize,
    tableName:'react',
    modelName: 'react',
  });
  return react;
};