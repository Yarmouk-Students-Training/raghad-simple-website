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
    await queryInterface.dropTable('reacts');
  }
};