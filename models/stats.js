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
  teamO: {
  type: Boolean,
  required: true
  },
  teamD: {
    type: Boolean,
    required: true
  },
  // mvp:{
  //   type:Boolean,
  //   required:true
  // },
  // mip:{
  //   type:Boolean,
  //   required:true
  // },
  // dpoy:{
  //   type:Boolean,
  //   required:true
  // },
  // roy:{
  //   type:Boolean,
  //   required:true
  // },
  // foy:{
  //   type:Boolean,
  //   required:true
  // },
  // coy:{
  //   type:Boolean,
  //   required:true
  // },
})

module.exports = mongoose.model('Stats', StatsSchema)
