const TaskRoutes = require('./TaskRoutes');
const prefix = 'api';
module.exports = function (app) {

    app.use(`/${prefix}/tasks`, TaskRoutes);
}