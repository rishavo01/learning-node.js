import express from 'express';
import db from './db.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello rishav');
});



app.post("/data", (req, res) => {
  res.send("data is fetched");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
