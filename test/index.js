
process.env.NODE_ENV = 'test';
require('../app');
const chai = require('chai');
const sinon = require('sinon');
chai.use(require('sinon-chai'));
global.should = chai.should();
global.sinon = sinon;
