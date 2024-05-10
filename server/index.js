// require('dotenv').config();
// const { host } = require('./config');
// const express = require('express');
// const mysql = require('mysql2');
import express from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';
import userRouter from './api/index.js';

dotenv.config();

// const db = mysql.createPool({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE
// }).promise()

// async function start() {
//     const pool = mysql.createPool({
//         host: process.env.HOST,
//         user: process.env.USER,
//         password: process.env.PASSWORD,
//         database: process.env.DATABASE
//     }).promise()
    
//     const [row] = await pool.query("SELECT * from user");
//     console.log(row)
// }


// console.log(rows)
const app = express();

app.listen(5050, () => {
    console.log('server is running on port 5050!!!');
    
    // start();
})

app.use('/api', userRouter);
