'use strict';

const Task = require('../models/task');

function add(req, res) {
  const task = new Task(req.body);

  task.save()
    .then(data => res.redirect('/'))
    .catch(error => res.status(500).send(error));
}

function getAll(req, res) {
  Task.find()
    .then(tasks => res.render('index', { tasks }))
    .catch(error => res.status(500).send(error));
}

function deleteOne(req, res) {
  Task.deleteOne({ _id: req.params.id })
    .then(data => res.redirect('/'))
    .catch(error => res.status(500).send(error));
}

function updateStatus(req, res) {
  Task.findById(req.params.id)
    .then(task => {
      task.status = !task.status;
      return task.save();
    })
    .then(data => res.redirect('/'))
    .catch(error => res.status(500).send(error));
}

function edit(req, res) {
  Task.findById(req.params.id)
    .then(task => res.render('edit', { task }))
    .catch(error => res.status(500).send(error));
}

function save(req, res) {
  Task.update({ _id: req.params.id }, req.body)
    .then(data => res.redirect('/'))
    .catch(error => res.status(500).send(error));
}

module.exports = {
  add,
  getAll,
  deleteOne,
  updateStatus,
  edit,
  save
}
