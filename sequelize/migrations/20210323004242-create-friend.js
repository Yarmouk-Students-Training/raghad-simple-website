'use strict';
module.exports = {
  up: async (queryInterface, DataType) => {
    await queryInterface.createTable('friends', {
     
      friendID: {
        type: Sequelize.INET,
        allowNull: false,
        primaryKey: true,
      },
      userID: {
        allowNull: false,
        forignKey: true,
        type: DataType.INTEGER
      },
      accept: {
        type: DataType.BOOLEAN
      },
      reject: {
        type: DataType.BOOLEAN
      },
      block: {
        type: DataType.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: DataType.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataType.DATE
      }
    });
  },
  down: async (queryInterface, DataType) => {
    await queryInterface.dropTable('friends');
  }
};