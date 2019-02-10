const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create schema
const CollegeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  _city: {
    type: Schema.Types.ObjectId, ref: 'City',
    required: true
  },
  _university: {
    type: Schema.Types.ObjectId, ref: 'University',
    required: true
  }
})

module.exports = College = mongoose.model("colleges", CollegeSchema)