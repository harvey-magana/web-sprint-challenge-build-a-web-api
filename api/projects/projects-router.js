// Write your "projects" router here!
const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

/**
 *   get,
    insert,
    update,
    remove,
    getProjectActions,
 */

 router.get('/projects', (req, res) => {
    Projects.get(req.query)
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error retreiving projects."
      })
    })
 })