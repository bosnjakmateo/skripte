const Validator = require("validator")
const isEmpty = require("./isEmpty")

module.exports = function validateUserData(data) {
    let errors = {}
    
    if (Validator.isEmpty(data.title)) {
        errors.name = "Title field is required"
    }

    if (!Validator.isLength(data.title, { min: 5, max: 50 })) {
        errors.title = "Title must be between 5 and 50 characters"
    }

    if (Validator.isEmpty(data.description)) {
        errors.name = "Description field is required"
    }

    if (!Validator.isLength(data.description, { min: 10, max: 80 })) {
        errors.description = "Description must be between 10 and 80 characters"
    }

    if (Validator.isEmpty(data._subject)) {
        errors.name = "Subject field is required"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}