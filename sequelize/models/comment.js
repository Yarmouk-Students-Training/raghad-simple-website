'use strict';
const {
  Model, STRING, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({user, post}) {
      // define association here
      this.belongsTo(user,{foreignKey:'userID'});
      this.belongsTo(post,{foreignKey:'postID'});
    }
  };
  comment.init({
    commentID: {type:DataTypes.INTEGER,primaryKey:true,allowNull:false,autoIncrement:true},
    postID:{type:DataTypes.INTEGER,foreignKey:true},
    name: {type:DataTypes.STRING,allowNull:false},
    content: {type:DataTypes.STRING,allowNull:false},
  }, {
    sequelize,
    tableName:'comment',
    modelName: 'comment',
  });
  return comment;
};