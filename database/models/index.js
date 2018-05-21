const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);

const env = process.env.ENV;
const config = require('../../config/db')[env ? env : "development"];
const tasks = require('./tasks');


const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);


/**
Can't replace automatic importing by hard code importing, because CLI depends on
the location of model folder every time it touch the models.
*/

fs.readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
