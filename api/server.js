const express = require('express');
const server = express();

// Complete your server here!
// Do NOT `server.listen()` inside this file!

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h2>My Express Sprint Project</h2>`);
  });

module.exports = server;
