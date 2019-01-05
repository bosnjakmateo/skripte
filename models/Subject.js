const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create schema
const SubjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    _college: {
        type: Schema.Types.ObjectId, ref: 'College',
        required: true
    }
})

module.exports = Subject = mongoose.model("subjects", SubjectSchema)