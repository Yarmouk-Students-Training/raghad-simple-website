'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('friends', {
     
      action:{
        type:DataTypes.ENUM('accept', 'reject'),
        allowNull: false,
        primaryKey: true,
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