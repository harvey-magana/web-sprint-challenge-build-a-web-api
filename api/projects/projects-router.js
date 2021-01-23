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

 
 router.get('/', (req, res) => { // this request is not working...
    const { id } = req.params;

    Projects.get(id)
      .then((project) => {
        if (project) {
          res.json(project);
        } else {
          res.status(404).json({ message: "Could not find project with given id." });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Failed to get project." });
      });
 })

 router.post('/', (req, res) => {
     const newProject = req.body;

     Projects.insert(newProject)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error adding project"
            })
        })
 })
 
module.exports = router;