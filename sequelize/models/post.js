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
    static associate({user:user,comment:comment,react:react}) {
      // define association here
      this.belongsTo(user,{foreignKey:'userID'});
      this.hasMany(Comment,{foreignKey:'postID'});
      this.hasMany(React,{foreignKey:'postID'});
    }
  };
  post.init({
    postID: {DataTypes:INTEGER,primaryKey:true,allowNull:false,validate:{allowNull:'must have a post id'}},
    userID: {DataTypes:INTEGER,forignKey:true,allowNull:false,validate:{allowNull:'must have a user id'}},
    public_date:{DataTypes:DATE,allowNull:false,validate:{allowNull:'must have a public date'}},
    content: {DataTypes:STRING,allowNull:false,validate:{allowNull:'must have a content'}},
    comment: DataTypes.STRING,
    react: DataTypes.STRING
  }, {
    sequelize,
    tableName:'post',
    modelName: 'post',
  });
  return post;
};