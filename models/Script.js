const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create schema
const ScriptSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  pdfPath: {
    type: String,
    required: true
  },
  likes: [{
    _user: {
      type: Schema.Types.ObjectId, ref: 'User'
    }
  }],
  dislikes: [{
    _user: {
      type: Schema.Types.ObjectId, ref: 'User'
    }
  }],
  comments: [{
    text: {
      type: String
    },
    user: {
      type: String
    },
    date: {
      type: Date
    }
  }],
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: String
  },
  _subject: {
    type: Schema.Types.ObjectId, ref: 'Subject',
    required: true
  }
})

module.exports = Script = mongoose.model("scripts", ScriptSchema)