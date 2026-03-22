import express from 'express';
import cors from 'cors';

const app = express();
const port = "5002";
const appIp = '127.0.0.1';

app.use(
  cors({
    origin: "http://localhost:5173"
  })
);
app.get('/', (req, res) => {
    res.status(200).json("Welcome to the Server");
});

app.listen(port, () => {
    console.log(`Server Started at http://${appIp}:${port}`);
})