const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('dotenv').config({path: './config/.env'});
const app = express();




app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());

require('./routes/index')(app);

app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${port}!`));


module.exports = app;