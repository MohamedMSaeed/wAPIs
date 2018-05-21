const ResultCodes = require('./ResultCodes');
class CustomMessage {
    constructor(code, data, message = '') {
        this.code = code;
        this.data = data;
        this.message = message;
    }
}

class SuccessMessage extends CustomMessage {
    constructor(code, data, message = '') {
        super(code, data, message);
        this.success = true;
        switch (this.code) {
            case ResultCodes.FETCHING_DATA_SUCCESS:
                this.status = 200;
            case ResultCodes.UPDATING_OBJECT_SUCCESS:
                this.status = 200;
            case ResultCodes.REMOVING_OBJECT_SUCCESS:
                this.status = 204;
            default:
                this.status = 200;
        }
    }
}

class ErrorMessage extends CustomMessage {
    constructor(code, data, message = '') {
        super(code, data, message);
        this.success = false;
        switch (this.code) {
            case ResultCodes.DATABASE_ERROR:
                this.status = 404;
            case ResultCodes.INVALID_PARAMS:
                this.status = 404;
            default:
                this.status = 404;
        }
    }
}

module.exports = {
    SuccessMessage,
    ErrorMessage
}