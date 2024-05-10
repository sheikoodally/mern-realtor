// import dotenv from 'dotenv';
import mysql from 'mysql2';
import express from 'express';
import {dbconfig} from '../../dbConfig.js';
import bcrypt from "bcrypt";
// dotenv.config();

var db_var = {
    connectionLimit : 10,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}

// var pool  = mysql.createPool(db_var).promise()


export const Auth = async (req, res, next) => { 
    // console.log(dbconfig)
    console.log(req.body)
    try { 
        const saltRounds = 10;
        const myPlaintextPassword = 'sammi@123aaa';
        const someOtherPlaintextPassword = 'not_bacon';

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(myPlaintextPassword, salt);

        const pool = mysql.createPool(dbconfig).promise()
        // const q = "INSERT INTO user (`first_name`, `last_name`, `email`, `password`, `username`) VALUES (?)"
        // const values = ["asdasdalva","bteaf","alva@emailasd.com",hash,"aasedfaasdasdasd"]
        // const [row] = await pool.query(q,[values]);

        // INSERT INTO user (first_name, last_name, email, password, username) VALUES ('samaa', 'moaaa', 'sanna@hotmail.com', ${hash}, 'sammaloj')

        // console.log(hash)

        // let hhh = await bcrypt.compare(myPlaintextPassword, hash);

        // const pool = mysql.createPool(dbconfig).promise()
        // const [row] = await pool.query("SELECT * from user");
        // console.log(row)

        // res.json({
        //     message: row
        // })

        // pool.end();

        // console.log('pool ended')
        // console.log(pool)

        console.log('im hhh')

        res.json({
            message: "data successfully created"
        })


    }
    catch (err) {
        console.log('im in err')
        return res.json(err)
    }
 }
