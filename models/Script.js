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
    _college: {
        type: Schema.Types.ObjectId, ref: 'College',
        required: true
    }
})

module.exports = Script = mongoose.model("scripts", ScriptSchema)