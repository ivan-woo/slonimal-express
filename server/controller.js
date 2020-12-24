// Write your controller here

const models = require('../database/models.js');

module.exports = {
  getAll: (req, res) => {
    models.getAll((err, results) => {
      if (err) {
        console.log('Unable to return all data from Slonimal Database');
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    })
  },

  addNew: (req, res) => {
    models.addNew(req.body.animal, req.body.speed_mm_per_s, (err, result) => {
      if (err) {
        console.log(`Unable to add ${req.body.animal} to database`)
        res.status(404).send(err);
      }
      res.status(200).send(`Added ${req.body.animal} to the database`);
    })
  }
}