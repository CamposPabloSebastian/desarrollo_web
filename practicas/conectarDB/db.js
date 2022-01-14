var msql= require('mysql')
var util = require('util')
require('dotenv').config()

var pool = msql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_NAME
})

pool.query = util.promisify(pool.query)

module.exports = pool