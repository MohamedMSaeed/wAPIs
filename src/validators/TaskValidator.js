const constants = require('../../constants');

const ErrorMessage = require('../../utils/CustomMessage').ErrorMessage;
const ResultCodes = require('../../utils/ResultCodes');
const RespondUtil = require('../../utils/RespondUtil');

module.exports = {
  validateListParams(req, res, next) {
    req.query.p = Number(req.query.p) || constants.DEFAULT_PAGE_NUMBER;
    req.query.l = Number(req.query.l) || constants.DEFAULT_LIMIT;
    const permittedSortCriteria = ['deliveryDate', 'status'];
    if (req.query.s && permittedSortCriteria.indexOf(req.query.s) == -1) {
      const error = new Error('invalid params');
      const errorMessage = new ErrorMessage(ResultCodes.INVALID_PARAMS, error, 'invalid params');
      return RespondUtil.sendReponse(req, res, errorMessage);
    }
    return next();
  },
  validateUpdateParams(req, res, next) {
    const permittedStatusValues = ['started', 'pending', 'completed', 'failed'];
    if (permittedStatusValues.indexOf(req.body.status) == -1 || !Number(req.params.taskId)) {
      const error = new Error('invalid params');
      const errorMessage = new ErrorMessage(ResultCodes.INVALID_PARAMS, error, 'invalid params');
      return RespondUtil.sendReponse(req, res, errorMessage);
    }
    return next();
  },
};
