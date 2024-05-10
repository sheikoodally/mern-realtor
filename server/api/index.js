import dotenv from 'dotenv';
import mysql from 'mysql2';
import express from 'express';
import { Login }   from './controllers/user.route.js';
import { Auth }   from './controllers/auth.route.js';
const router = express.Router();

dotenv.config();

router.get( '/user/login' ,Login);
router.post( '/auth' , Auth);

export default router;