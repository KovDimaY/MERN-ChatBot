const mongoose = require('mongoose');

const { Schema } = mongoose;

const feedbackSchema = new Schema({
  name: String,
  date: Date,
  feedback: String,
});

const Feedback = mongoose.model('feedback', feedbackSchema);

module.exports = { Feedback };
