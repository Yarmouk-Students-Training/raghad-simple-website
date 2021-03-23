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
    commentID: {type:DataTypes.INTEGER,primaryKey:true,allowNull:false,validate:{allowNull:'must have a comment id'}},
    name: {type:DataTypes.STRING,allowNull:false,validate:{allowNull:'must have a user id'}},
    content: {type:DataTypes.STRING,allowNull:false,validate:{allowNull:'must have a user id'}},
  }, {
    sequelize,
    tableName:'comment',
    modelName: 'comment',
  });
  return comment;
};