const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "remotemysql.com",
    user: "f3El4hVd4Y",
    password: "93DWxHSFqB",
    database:"f3El4hVd4Y"
});

module.exports = connection;