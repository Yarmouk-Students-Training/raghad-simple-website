'use strict';
module.exports = {
  up: async (queryInterface, DataType) => {
    await queryInterface.createTable('posts', {
      
      postID: {
        allowNull: false,
        primaryKey: true,
        type: DataType.INTEGER
      },
      userID: {
        allowNull: false,
        forignyKey: true,
        type: DataType.INTEGER
      },
      public_date: {
        allowNull: false,
        type: DataType.DATE
      },
      content: {
        allowNull: false,
        type: DataType.STRING
      },
      comment: {
        allowNull: false,
        type: DataType.STRING
      },
      react: {
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
    await queryInterface.dropTable('posts');
  }
};