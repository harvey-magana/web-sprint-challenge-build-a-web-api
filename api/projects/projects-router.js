// Write your "projects" router here!
const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

/**
 *   get, *
    insert, *
    update, *
    remove, *
    getProjectActions,
 */

 
 router.get('/', (req, res) => { 
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
 });

 router.get('/:id/actions', (req, res) => {
    Projects.getProjectActions(req.params.id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error getting the actions for the project',
      });
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
 });

 router.put('/:id', (req, res) => {
    const changes = req.body;
    console.log(req)
    Projects.update(req.params.id, changes)
        .then(project => {
            if(project) {
                res.status(200).json(project);
            } else {
                res.status(400).json({
                    message: "Project id not found."
                })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error retrieving the project."
            })
        })
 });
 
 router.delete('/:id', (req, res) => {
    Projects.remove(req.params.id)
        .then(project => {
            if(project > 0) {
                res.status(200).json({
                    message: "The project has been deleted."
                })
            } else {
                res.status(404).json({
                    message: "The project with the specified id does not exist."
                })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: "The post could not be removed"
            })
        })
 });

module.exports = router;