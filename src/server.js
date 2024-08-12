require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web');
const mysql = require('mysql2')

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME

configViewEngine(app);
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'hoidanit'
})
//simple query
connection.query(
    'SELECT * FROM Users;',
    function (err, results, fields){
        console.log(">> results =", results);
        console.log(">> fields:", fields);
    }
);