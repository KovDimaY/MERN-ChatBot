const mongoose = require('mongoose');

const { Schema } = mongoose;

const demandSchema = new Schema({
  param: String,
  counter: { type: Number, default: 1 },
});

const Demand = mongoose.model('demand', demandSchema);

module.exports = { Demand };
