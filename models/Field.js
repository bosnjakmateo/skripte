const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create schema
const FieldSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    _college: {
        type: Schema.Types.ObjectId, ref: 'College',
        required: true
    }
})

module.exports = Field = mongoose.model("fields", FieldSchema)