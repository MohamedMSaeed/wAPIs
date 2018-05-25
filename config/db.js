require('dotenv').config({ path: './config/.env' });

const config = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'mysql',
};

const development = { ...config };
const test = { ...config };
const production = { ...config };
module.exports = {
  development, test, production,
};
