require('dotenv').config()
console.log('prod: process.env.DB_URL:',process.env.DB_URL);

module.exports = {
    "dbURL": process.env.DB_URL,
    "dbName": "volunteery",
}