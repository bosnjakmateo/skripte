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
    favorites: [{
        _subject: {
            type: Schema.Types.ObjectId, ref: 'Subject'
        }
    }]
})

module.exports = User = mongoose.model("users", UserSchema)