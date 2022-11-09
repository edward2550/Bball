const mongoose = require('mongoose')

const StatsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  PPG: {
    type: String,
    required: false,
  },
  position: {
    type: String,
    required: false,
  },
  teamAverage: {
    type: String,
    required: false,
  },
  RPG: {
    type: String,
    required: false,
  },
  APG: {
    type: String,
    required: false,
  },
  blocks: {
    type: String,
    required: false,
  },
  steals: {
    type: String,
    required: false,
  },
  FG: {
    type: String,
    required: false,
  },
  threePt: {
    type: String,
    required: false,
  },
  FT: {
    type: String,
    required: false,
  },
  assitTo: {
    type: String,
    required: false,
  },
  userId: {
    type: String,
  },
})

module.exports = mongoose.model('Stats', StatsSchema)
