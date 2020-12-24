// Configure routes here
const router = require('express').Router();
const controller = require('./controller.js');

router.route('/')
  .get(controller.getAll)
  .post(controller.addNew)

module.exports = router;