const express = require('express');


// Complete your server here!
// Do NOT `server.listen()` inside this file!

const projectsRouter = require('./projects/projects-router.js');
const actionsRouter = require('./actions/actions-router.js');
const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

server.get('/api', (req, res) => {
    res.send(`<h2>My Express Sprint Project</h2>`);
  });

module.exports = server;
