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

// @route   GET api/scripts/:id
// @desc    Get script by id
// @access  Public
router.get("/:id", (req, res) => {
    Script.findById(req.params.id)
        .then(script => res.json(script))
        .catch(err => res.status(404).json({ message: "No script was found" }))
})

// @route   PATCH api/scripts/:id
// @desc    Update a script
// @access  Public
router.patch("/:id", (req, res) => {
  const { errors, isValid } = validateScriptInput(req.body)
  if(!isValid) {
      return res.status(400).json(errors)
  }

  Script.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
      .then(script => {
        if(!script){
          return res.status(404).json({message: "Script to update not found"});
        } else {
          return res.json(script)
        }
      })
      .catch(err => console.log(err));

})

// @route   DELETE api/scripts/:id
// @desc    Remove a script by id
// @access  Public
router.delete("/:id", (req, res) => {
    Script.findOneAndDelete({ _id: req.params.id})
        .then(script => {
          if(!script){
            return res.status(404).json({ message: "Script to delete not found"});
          } else{
            return res.json( {message: "Script deleted"} )
          }
        })
        .catch(err => console.log(err));
})

// @route   DELETE api/scripts
// @desc    Get all scripts
// @access  Public
router.delete("/", (req, res) => {
    Script.deleteMany({})
        .then(script => res.json( {message: "Scripts removed"} ))
        .catch(err => res.status(404).json({ message: "No scripts to delete" }))
})

module.exports = router
