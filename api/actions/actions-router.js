// Write your "actions" router here!
const express = require('express');

const Actions = require('./actions-model.js');

const router = express.Router();

/**
 *  get, * 
  insert, *
  update, *
  remove,
 */

router.get('/', (req, res) => {
    const { id } = req.params;

    Actions.get(id)
      .then((action) => {
        if (action) {
          res.json(action);
        } else {
          res.status(404).json({ message: "Could not find action with given id." });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Failed to get action." });
      });
});

router.post('/', (req, res) => {
    const newAction = req.body;

    Actions.insert(newAction)
       .then(action => {
           res.status(201).json(action);
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
    Actions.update(req.params.id, changes)
        .then(action => {
            if(action) {
                res.status(200).json(action);
            } else {
                res.status(400).json({
                    message: "Action id not found."
                })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error retrieving the action."
            })
        })
});

router.delete('/:id', (req, res) => {
    Actions.remove(req.params.id)
    .then(action => {
        if(action > 0) {
            res.status(200).json({
                message: "The action has been deleted."
            })
        } else {
            res.status(404).json({
                message: "The action with the specified id does not exist."
            })
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            error: "The action could not be removed"
        })
    })
});

module.exports = router;