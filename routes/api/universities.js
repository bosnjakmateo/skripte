const express = require("express")
const router = express.Router()

// Load input validation
const validateUniversityInput = require("../../validation/university")

// Load models
const University = require("../../models/University")

// @route   POST api/universities
// @desc    Add a university
// @access  Public
router.post("/", (req, res) => {
    const { errors, isValid } = validateUniversityInput(req.body)

    if (!isValid) {
        return res.status(400).json(errors)
    }

    University.findOne({ name: req.body.name })
        .then(university => {
            if (university) {
                return res.status(400).json({ message: "University already exists" })
            } else {
                const newUniversity = new University(req.body)
                newUniversity.save()
                    .then(newUniversity => res.json(newUniversity))
                    .catch(err => res.json(err))
            }
        })
        .catch(err => req.json(err))
})

// @route   GET api/universities
// @desc    Get all universities
// @access  Public
router.get("/", (req, res) => {
    University.find()
        .then(university => res.json(university))
        .catch(err => res.status(404).json({ message: "No universities where found" }))
})

module.exports = router
