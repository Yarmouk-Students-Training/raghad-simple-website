'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('reacts', {
     
      reactID: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      postID: {
        allowNull: false,
        forignyKey: true,
        type: DataTypes.INTEGER      
      },
      userID: {
        allowNull: false,
        forignKey: true,
        type: DataTypes.INTEGER      
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING 
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
    await queryInterface.dropTable('reacts');
  }
};