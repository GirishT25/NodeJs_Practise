const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const connectToDb = require('./DB/db');

connectToDb();  

app.use(cors());

app.get('/' , (req , res) =>{
    res.send("Hello world");
})

module.exports = app;