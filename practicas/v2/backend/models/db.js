var msql= require('mysql')
var util = require('util')
require('dotenv').config()

var pool = msql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    database: process.env.DB_NAME
    // host: 'us-cdbr-east-05.cleardb.net',
    // user: 'bb0857b524d028',
    // pass: 'a646f1c7',
    // database: 'heroku_29409a6ce3bfee7' 
});

pool.query = util.promisify(pool.query)

module.exports = pool