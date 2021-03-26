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
    await queryInterface.dropTable('friends');
  }
};