const express = require("express")
const router = express.Router()

// Load input validation
const validateCityInput = require("../../validation/city")

// Load models
const City = require("../../models/City")

// @route   POST api/cities
// @desc    Add a city
// @access  Public
router.post("/", (req, res) => {
    const { errors, isValid } = validateCityInput(req.body)

    if (!isValid) {
        return res.status(400).json(errors)
    }

    City.findOne({ name: req.body.name })
        .then(city => {
            if (city) {
                return res.status(400).json({ message: "City already exists" })
            } else {
                const newCity = new City({
                    name: req.body.name
                })
                newCity.save()
                    .then(newShift => res.json(newShift))
                    .catch(err => res.json(err))
            }
        })
        .catch(err => req.json(err))
})

// @route   GET api/cities
// @desc    Get all cities
// @access  Public
router.get("/", (req, res) => {
    City.find()
        .then(city => res.json(city))
        .catch(err => res.status(404).json({ message: "No cities where found" }))
})

module.exports = router
