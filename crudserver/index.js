import express from 'express';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

const app = express()

dotenv.config()
app.use(cors()); 
app.use(express.json({extended: true})); 
app.use(express.json()); 
const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
app.use(bodyParser.json({extended: true }));
 
app.use(bodyParser.urlencoded({ extended: true }));

app.use('',Routes)
Connection(USERNAME,PASSWORD)
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})