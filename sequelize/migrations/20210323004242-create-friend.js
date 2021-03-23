'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('friends', {
     
      friendID: {
        type: DataTypes.INET,
        allowNull: false,
        primaryKey: true,
      },
      userID: {
        allowNull: false,
        forignKey: true,
        type: DataTypes.INTEGER
      },
      accept: {
        type: DataTypes.BOOLEAN
      },
      reject: {
        type: DataTypes.BOOLEAN
      },
      block: {
        type: DataTypes.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('friends');
  }
};