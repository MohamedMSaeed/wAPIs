'use strict';
module.exports = (sequelize, DataTypes) => {
  var task = sequelize.define('tasks', {
    fromLocation: {
      type: DataTypes.STRING,
      field: 'from_location'
    },
    toLocation: {
      type: DataTypes.STRING,
      field: 'to_location'
    },
    deliveryDate: {
      type: DataTypes.DATE,
      field: 'delivery_date'
    },
    startedAt: {
      type: DataTypes.DATE,
      field: 'started_at'
    },
    finishedAt: {
      type: DataTypes.STRING,
      field: 'finished_at'
    },
    driverName: {
      type: DataTypes.STRING,
      field: 'driver_name'
    },
    courier: {
      type: DataTypes.STRING
    }, 
    description: {
      type: DataTypes.TEXT
    }, 
    status: {
      type : DataTypes.ENUM('started', 'pending', 'completed', 'failed'),
      default: 'started'      
    },
    driverComment: {
      type: DataTypes.STRING, 
      field: 'driver_comment'
    }
  }, {});
  task.associate = function(models) {
    // associations can be defined here
  };
  return task;
};