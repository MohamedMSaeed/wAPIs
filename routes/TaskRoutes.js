const express = require('express');
const taskRouter = express.Router();
const TaskController = require('../src/controllers/TaskController');
const TaskValidator = require('../src/validators/TaskValidator');

taskRouter.get('/', TaskValidator.validateListParams, TaskController.list);
taskRouter.put('/:taskId', TaskValidator.validateUpdateParams, TaskController.update);

module.exports = taskRouter;