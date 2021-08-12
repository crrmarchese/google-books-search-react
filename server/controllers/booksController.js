const db = require("../models");

// Defining methods for the booksController
const booksController = {
  findAll: function(req, res) {
    db.Book
      .find({})
      .then(dbBooks => res.status(200).json(dbBooks))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body, "this is the create function")
    db.Book
      .create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
};

module.exports = booksController