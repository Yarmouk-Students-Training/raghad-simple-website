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
      primaryKey: true,
      allowNull: false,
      validate: { allowNull: 'must have a user id' }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { allowNull: 'must have a user name' }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { allowNull: 'must have a user email' }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { allowNull: 'must have a user password' }
    },
  }, {
    sequelize,
    tableName: 'user',
    modelName: 'user',
  })
  return user;
};