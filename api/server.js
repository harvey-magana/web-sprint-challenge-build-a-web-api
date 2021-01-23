const express = require('express');
const server = express();

// Complete your server here!
// Do NOT `server.listen()` inside this file!

const ProjectsRouter = require('./projects/projects-router.js');

server.use(express.json());

server.use('/api/projects/', ProjectsRouter);

server.get('/', (req, res) => {
    res.send(`<h2>My Express Sprint Project</h2>`);
  });

module.exports = server;
