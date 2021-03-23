'use strict';
module.exports = {
  up: async (queryInterface, DataType) => {
    await queryInterface.createTable('users', {

      userID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER
      },
      name: {
        type: DataType.STRING,
        allowNull:false
      },
      email: {
        type: DataType.STRING,
        allowNull: false,
        primaryKey: true,
      },
      password: {
        type: DataType.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('users');
  }
};