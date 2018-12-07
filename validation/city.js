const Validator = require("validator")
const isEmpty = require("./isEmpty")

module.exports = function validateUserData(data) {
    let errors = {}
    
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required"
    }

    if (!Validator.isLength(data.name, { min: 3, max: 50 })) {
        name.username = "Name must be between 3 and 50 characters"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}