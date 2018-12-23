var express = require('express');
var db = require('../db')

var router = express.Router();

// create a Decision
// POST /v1/decisions
router.post('/decisions', function(req, res, next) {
  res.send('respond with a resource');
});

// retrieve a Decisions by {id}
// GET /v1/decisions/{ID}
router.get('/decisions/:id', function(req, res, next) {
  res.send('respond with a resource');
});

// update a Decision by {id}
// POST /v1/decisions/{DECISION_ID}
router.post('/decisions/:id', function(req, res, next) {
  res.send('respond with a resource');
});

// list all Decisions
// GET /v1/decisions
router.get('/decisions', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
