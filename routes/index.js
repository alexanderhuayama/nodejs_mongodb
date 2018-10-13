'use strict';

const express = require('express'),
  router = express.Router(),
  controller = require('../controllers/task');

router
  .get('/', controller.getAll)
  .post('/add', controller.add)
  .get('/delete/:id', controller.deleteOne)
  .get('/turn/:id', controller.updateStatus)
  .get('/edit/:id', controller.edit)
  .post('/edit/:id', controller.save)

module.exports = router;