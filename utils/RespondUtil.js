module.exports = {
    sendReponse(req, res, message) {
        return res.status(message.status).json({
            success: message.success,
            data: message.data,
            message: message.message

        });
    }
}