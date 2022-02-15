var msql= require('mysql')
var util = require('util')
require('dotenv').config()

var pool = msql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
});

pool.query = util.promisify(pool.query)

module.exports = pool