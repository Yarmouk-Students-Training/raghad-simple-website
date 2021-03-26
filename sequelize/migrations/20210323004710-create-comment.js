'use strict';

const { DataTypes } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('comments', {
     
      commentID: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      postID: {
        allowNull: false,
        forignKey: true,
        type: DataTypes.INTEGER
      },
      userID: {
        allowNull: false,
        forignKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'created_at',
          },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('comments');
  }
};