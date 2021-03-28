'use strict';
const {
  Model, DATE, STRING, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({user,comment,react}) {
      // define association here
      this.belongsTo(user,{foreignKey:'userID'});
      this.hasMany(comment,{foreignKey:'postID'});
      this.hasMany(react,{foreignKey:'postID'});
    }
  };
  post.init({
    postID: {type:DataTypes.INTEGER,primaryKey:true,allowNull:false,autoIncrement:true},
    userID:{type:DataTypes.STRING,allowNull:false},
    public_date:{type:DataTypes.DATE,allowNull:false},
    content: {type:DataTypes.STRING,allowNull:false},
    comment: DataTypes.STRING,
    react: DataTypes.STRING
  }, {
    sequelize,
    tableName:'post',
    modelName: 'post',
  });
  return post;
};