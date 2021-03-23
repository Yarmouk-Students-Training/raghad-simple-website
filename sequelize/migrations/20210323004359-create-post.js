'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('posts', {
      
      postID: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userID: {
        allowNull: false,
        forignyKey: true,
        type: DataTypes.INTEGER
      },
      public_date: {
        allowNull: false,
        type: DataTypes.DATE
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING
      },
      comment: {
        allowNull: false,
        type: DataTypes.STRING
      },
      react: {
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
    await queryInterface.dropTable('posts');
  }
};