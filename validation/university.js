const Validator = require("validator")
const isEmpty = require("./isEmpty")

module.exports = function validateUserData(data) {
    let errors = {}
    
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required"
    }

    if (!Validator.isLength(data.name, { min: 5, max: 50 })) {
        errors.name = "Name must be between 6 and 30 characters"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}