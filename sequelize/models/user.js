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

    static associate({ friend, post, comment, react, group, userGroup}) {
      // define association here
      this.hasMany(post, { foreignKey: 'userID' });
      this.hasMany(comment, { foreignKey: 'userID' });
      this.hasMany(react, { foreignKey: 'userID' });
      this.belongsToMany(this, {through: friend, as: "user1", foreignKey: "user2"})
      this.belongsToMany(this, {through: friend, as: "user2", foreignKey: "user1"})
    }
  }

  user.init({
    userID: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true,
      allowNull: false,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,

    },
  }, {
    sequelize,
    tableName: 'user',
    modelName: 'user',
  })
  return user;
};