const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config({path: './config/.env'});
const app = express();




app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(morgan('dev'))

require('./routes/index')(app);

app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${port}!`));


module.exports = app;