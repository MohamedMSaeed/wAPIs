const express = require('express');
const carrierRoutes = express.Router();
const CarrierController = require('../src/controllers/CarrierController');

carrierRoutes.get('/', CarrierController.index);

module.exports = carrierRoutes;