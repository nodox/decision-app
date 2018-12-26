const mongoose = require('mongoose');

let DecisionSchema = new mongoose.Schema({
  name: String,
  decisionMaker: String,
  description: String,
  startDate: { type: Date, default: Date.now },
  endDate: Date,
  outcome: String,
  email: String,
});

module.exports = mongoose.model('Decision', DecisionSchema);