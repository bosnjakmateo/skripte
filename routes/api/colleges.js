const express = require("express")
const router = express.Router()

// Load input validation
const validateCollegeInput = require("../../validation/college")

// Load models
const College = require("../../models/College")

// @route   POST api/colleges
// @desc    Add a college
// @access  Public
router.post("/", (req, res) => {
    const { errors, isValid } = validateCollegeInput(req.body)

    if (!isValid) {
        return res.status(400).json(errors)
    }

    College.findOne({ name: req.body.name })
        .then(college => {
            if (college) {
                return res.status(400).json({ message: "College already exists" })
            } else {
                const newCollege = new College(req.body)
                newCollege.save()
                    .then(newCollege => res.json(newCollege))
                    .catch(err => res.json(err))
            }
        })
        .catch(err => req.json(err))
})

// @route   GET api/colleges
// @desc    Get all colleges
// @access  Public
router.get("/", (req, res) => {
    College.find()
        .then(college => res.json(college))
        .catch(err => res.status(404).json({ message: "No colleges where found" }))
})

module.exports = router
