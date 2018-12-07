const express = require("express")
const router = express.Router()

// Load input validation
const validateScriptInput = require("../../validation/script")

// Load models
const Script = require("../../models/Script")

// @route   POST api/scripts
// @desc    Add a script
// @access  Public
router.post("/", (req, res) => {
    const { errors, isValid } = validateScriptInput(req.body)

    if (!isValid) {
        return res.status(400).json(errors)
    }

    Script.findOne({ name: req.body.name })
        .then(script => {
            if (script) {
                return res.status(400).json({ message: "Script already exists" })
            } else {
                const newScript = new Script(req.body)
                newScript.save()
                    .then(newScript => res.json(newScript))
                    .catch(err => res.json(err))
            }
        })
        .catch(err => req.json(err))
})

// @route   GET api/scripts
// @desc    Get all scripts
// @access  Public
router.get("/", (req, res) => {
    Script.find()
        .then(script => res.json(script))
        .catch(err => res.status(404).json({ message: "No scripts where found" }))
})

module.exports = router
