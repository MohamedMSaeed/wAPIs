const SuccessMessage = require('../../utils/CustomMessage').SuccessMessage;
const ErrorMessage = require('../../utils/CustomMessage').ErrorMessage;
const ResultCodes = require('../../utils/ResultCodes');
const TaskModel = require('../../database/models').tasks;
const constants = require('../../constants');
const Promise = require('bluebird');
module.exports = {
    list(pageNumber, limit, sort = 'deliveryDate') {
        let offset = (pageNumber - 1) * limit;
        let listPromises = [];

        listPromises.push(TaskModel.findAll({
            attributes: ['id', 'fromLocation', 'toLocation', 'deliveryDate', 'startedAt', 'finishedAt', 'driverName', 'courier', 'description', 'status', 'driverComment'],
            order: [[sort, 'ASC']],
            offset: offset,
            limit: limit
        }));
        listPromises.push(TaskModel.count({}));
        return Promise.all(listPromises)
            .spread((tasks, count) => {
                const resultTasks = {
                    tasks, count
                };
                const successMessage = new SuccessMessage(ResultCodes.FETCHING_DATA_SUCCESS, resultTasks, 'tasks listed successfully');
                return Promise.resolve(successMessage);
            }).catch(error => {
                const errorMessage = new ErrorMessage(ResultCodes.DATABASE_ERROR, error, 'something went wrong');
                return Promise.reject(errorMessage);
            })
    },
    async update(taskId, updatedStatus) {

        let task;
        try {
            task = await this.get(taskId);
        } catch (error) {
            return Promise.reject(errorMessage);
        }

        if (!isTaskStatusPending(task)) {
            const errorMessage = new ErrorMessage(ErrorMessage.DATABASE_ERROR, {}, 'task not pending');
            return Promise.reject(errorMessage);
        }
        return TaskModel.update({
            status: updatedStatus
        }, {
                where: { id: taskId }
            }).then(updateResult => {
                const message = new SuccessMessage(SuccessMessage.UPDATING_OBJECT_SUCCESS, updateResult);
                return Promise.resolve(message);
            }).catch(error => {
                const errorMessage = new ErrorMessage(ErrorMessage.DATABASE_ERROR, {}, 'something went wrong');
                return Promise.reject(errorMessage);
            })
    },
    async get(taskId) {
        let task;
        try {
            task = await TaskModel.findOne({
                where: { id: Number(taskId) }
            })
            if (!task)
                throw new Error('not found')
        } catch (error) {
            const errorMessage = new ErrorMessage(ErrorMessage.DATABASE_ERROR, error, 'task not found');
            return Promise.reject(errorMessage);
        }
    }
}

function isTaskStatusPending(task) {
    return task.status === constants.TASK_STATUS.PENDING;
}