// const mongoose = require('mongoose');
import mongoose from 'mongoose';
// const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {timeStamps: true});

const User = mongoose.model('user', userSchema);

export default User;