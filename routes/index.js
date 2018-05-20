const CarrierRoutes = require('./CarrierRoutes');
module.exports = function (app) {
    app.use('/', CarrierRoutes);
}