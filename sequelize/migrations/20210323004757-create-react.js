'use strict';
module.exports = {
  up: async (queryInterface, DataType) => {
    await queryInterface.createTable('reacts', {
     
      reactID: {
        allowNull: false,
        primaryKey: true,
        type: DataType.INTEGER
      },
      postID: {
        allowNull: false,
        forignyKey: true,
        type: DataType.INTEGER      
      },
      userID: {
        allowNull: false,
        forignKey: true,
        type: DataType.INTEGER      
      },
      type: {
        allowNull: false,
        type: DataType.STRING 
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
    await queryInterface.dropTable('reacts');
  }
};