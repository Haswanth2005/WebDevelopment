//app.js has 2 things - create server, config the server

const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send("response sent");
})

module.exports = app;
