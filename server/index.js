import express from 'express';
import mysql from 'mysql2';

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'sheik',
    database: 'realtor'
}).promise()

const [rows] = await pool.query("SELECT * from users");
console.log(rows)

const app = express();

app.listen(3000, () => {
    console.log('server is running!!!');
})