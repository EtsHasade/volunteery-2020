require('dotenv').config()

console.log('dev: process.env.DB_URL:',process.env.DB_URL);

module.exports = {
    // "dbURL": "mongodb://localhost:27017",
    "dbURL": process.env.dbURL,
    "dbName": "volunteery",
}