import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  avatar : {
    type: String,
    default: "https://imgs.search.brave.com/rCGeCHKkSE_s7ZwRS5VCQTKqCRaHgeLl4QYksqIjGws/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8zMTM1LzMxMzU3/MTUucG5n"
  },
}, {timestamps: true});

export const User = mongoose.model('User', userSchema);