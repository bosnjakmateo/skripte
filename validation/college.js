const Validator = require("validator")
const isEmpty = require("./isEmpty")

module.exports = function validateUserData(data) {
    let errors = {}
    
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required"
    }

    if (!Validator.isLength(data.name, { min: 5, max: 50 })) {
        errors.name = "Name must be between 5 and 50 characters"
    }

    if (Validator.isEmpty(data._city)) {
        errors.name = "City field is required"
    }

    if (Validator.isEmpty(data._university)) {
        errors.name = "University field is required"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}