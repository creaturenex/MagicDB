require('dotenv').config();
const PORT = process.env.PORT;
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

// server setup
const app = express();
const cardRoute = require('./routes/api/v1/cardRoute');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(express.raw());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

app.use('/api', cardRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './views/404.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT} - http://localhost:3333/`);
});
