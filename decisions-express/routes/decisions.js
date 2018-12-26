var express = require('express');
var db = require('../db')
const debug = require('debug')('decisions-express:api');
const Decision = require('../models/Decision')

var router = express.Router();

// create a Decision
const createDecision = async (req, res, next) => {
  const data = {
    name: req.body.name,
    decisionMaker: req.body.decisionMaker,
    description: req.body.description,
    endDate: req.body.endDate,
    outcome: req.body.outcome,
    email: req.body.email,
  }

  try {
    const result = await Decision.create(data)

    res.status(200).json(result)
  } catch (e) {
    res.status(400).json(e)
  }

}

// retrieve a Decisions by {id}
const getDecisionById = async (req, res, next) => {
  const decision_id = req.params.id

  try {
    // TODO: Check for null and handle errors properly
    const decisions = await Decision.findById(decision_id)
    res.status(200).json(decisions)
  } catch (e) {
    res.status(400).json(e)
  }
}

// update a Decisions by {id}
const updateDecisionById = async (req, res, next) => {
  const decision_id = req.params.id
  const data = req.body

  try {
    // TODO: Check for null and handle errors properly
    const decisions = await Decision.findOneAndUpdate(decision_id, data)
    res.status(200).json(decisions)
  } catch (e) {
    res.status(400).json(e)
  }
}

const deleteDecisionById = async (req, res, next) => {
  const decision_id = req.params.id

  try {
    const decisions = await Decision.findByIdAndDelete(decision_id)
    res.status(200).json(decisions)
  } catch (e) {
    res.status(400).json(e)
  }
}

// list all Decisions
const getAllDecisions = async (req, res, next) => {
  try {
    const decisions = await Decision.find()
    res.status(200).json(decisions)
  } catch (e) {
    res.status(400).json(e)
  }
}


// POST /v1/decisions
router.post('/decisions', createDecision)

// POST /v1/decisions/{ID}
router.post('/decisions/:id', updateDecisionById)

// GET /v1/decisions/{ID}
router.get('/decisions/:id', getDecisionById)

// DELETE /v1/decisions
router.delete('/decisions/:id', deleteDecisionById)

// GET /v1/decisions
router.get('/decisions', getAllDecisions)

module.exports = router;
