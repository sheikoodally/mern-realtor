require('dotenv').config();
const { host } = require('./config');
const express = require('express');
const mysql = require('mysql2');

async function start() {
    const pool = mysql.createPool({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }).promise()
    
    const [row] = await pool.query("SELECT * from user");
    console.log(row)
}


// console.log(rows)
const app = express();

app.listen(3000, () => {
    console.log('server is running on port 3000!!!');

    start()
    
})