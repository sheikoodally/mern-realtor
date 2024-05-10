// import dotenv from 'dotenv';
import mysql from 'mysql2';
import express from 'express';
import {dbconfig} from '../../dbConfig.js';
// dotenv.config();

// const db = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE
// })

var db_var = {
    // connectionLimit : 10,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}

// var pool  = mysql.createPool(db_var).promise()


export const Login = async (req, res, next) => { 
    // console.log(dbconfig)
    try { 

        const pool = mysql.createPool(dbconfig).promise()
        const [row] = await pool.query("SELECT * from user");
        console.log(row)

        res.json({
            message: row
        })

        pool.end();

        console.log('pool ended')
        console.log(pool)


    }
    catch (err) {
    }
 }
