import express from 'express';
import cors from 'cors';
import mysql from "mysql2";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = "5002";
const appIp = '127.0.0.1';

app.use(express.json());

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use(cors({
    origin: "http://localhost:5173"
  })
);

app.post('/users', (req, res) => {
  let {name, description, price, status} = req.body;
  conn.query(`INSERT INTO users(name, description, price, status) VALUES('${name}', '${description}', '${price}', '${status}')`);
  res.status(200).json({message: "Data Saved Successfully"})
});

app.get('/', (req, res) => {
    res.status(200).json("Welcome to the Server");
});

app.listen(port, () => {
    console.log(`Server Started at http://${appIp}:${port}`);
})