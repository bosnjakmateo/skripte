const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create schema
const UniversitySchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = Univesities = mongoose.model("univesities", UniversitySchema)