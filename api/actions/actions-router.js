// Write your "actions" router here!
const express = require('express');

const Actions = require('./actions-model.js');

const router = express.Router();

/**
 *  get, * 
  insert,
  update,
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
})
module.exports = router;