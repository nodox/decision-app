const mongoose = require('mongoose');

let DecisionSchema = new mongoose.Schema({
  primary: String,
  secondary: String,
  objective: String,
  body: String,
});

module.exports = mongoose.model('Decision', DecisionSchema);