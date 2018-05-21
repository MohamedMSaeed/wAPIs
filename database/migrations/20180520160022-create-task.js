'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      from_location: {
        type: Sequelize.STRING
      },
      to_location: {
        type: Sequelize.STRING
      },
      delivery_date: {
        type: Sequelize.STRING
      },
      started_at: {
        type: Sequelize.STRING
      },
      finished_at: {
        type: Sequelize.STRING
      },
      driver_name: {
        type: Sequelize.STRING        
      },
      courier: {
        type: Sequelize.STRING 
      },
      description: {
        type: Sequelize.TEXT 
      },
      status: {
        type : Sequelize.ENUM('started', 'pending', 'completed', 'failed'),
        default: 'started'      
      },
      driver_comment: {
        type: Sequelize.STRING 
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tasks');
  }
};