const RespondUtil = require('../../utils/RespondUtil');
const TaskService = require('../services/TaskService');

module.exports = {
    list(req, res) {
        let pageNumber = req.query.p;
        let limit = req.query.l;
        let sort = req.query.s;
        return TaskService.list(pageNumber, limit, sort)
            .then(successMessage => {
                return RespondUtil.sendReponse(req, res, successMessage);
            })
            .catch(errorMessage => {
                return RespondUtil.sendReponse(req, res, errorMessage);
            })
    },
    update(req, res) {
        let taskId = req.params.taskId;
        let updatedStatus = req.body.status;

        return TaskService.update(taskId, updatedStatus)
            .then(successMessage => {
                return RespondUtil.sendReponse(req, res, successMessage);
            })
            .catch(errorMessage => {
                return RespondUtil.sendReponse(req, res, errorMessage);
            })
    }
}