const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  favoriteSubjects: [{
    _subject: {
      type: Schema.Types.ObjectId, ref: 'Subject'
    }
  }],
  favoriteScripts: [{
    _script: {
      type: Schema.Types.ObjectId, ref: 'Script'
    }
  }],
  scripts: [{
    _script: {
      type: Schema.Types.ObjectId, ref: 'Script'
    }
  }],
  tutorial: {
    type: Boolean,
    default: false
  }
})

module.exports = User = mongoose.model("users", UserSchema)