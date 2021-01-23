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

 router.get('/:id', (req, res) => { // this request is not working...
    const { id } = req.params;

    Projects.get(id)
      .then((item) => {
        if (item) {
          res.json(item);
        } else {
          res.status(404).json({ message: "Could not find item with given id." });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Failed to get item" });
      });
 })

 router.post('/projects', (req, res) => {
     Projects.insert(req.body)
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