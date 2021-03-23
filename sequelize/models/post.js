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
    }
  };
  post.init({
    postID: {type:DataTypes.INTEGER,primaryKey:true,allowNull:false,validate:{allowNull:'must have a post id'}},
    public_date:{type:DataTypes.DATE,allowNull:false,validate:{allowNull:'must have a public date'}},
    content: {type:DataTypes.STRING,allowNull:false,validate:{allowNull:'must have a content'}},
    comment: DataTypes.STRING,
    react: DataTypes.STRING
  }, {
    sequelize,
    tableName:'post',
    modelName: 'post',
  });
  return post;
};