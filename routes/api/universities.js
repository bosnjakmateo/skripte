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

// @route   GET api/universities/:id
// @desc    Get university by id
// @access  Public
router.get("/:id", (req, res) => {
    University.findById(req.params.id)
        .then(university => res.json(university))
        .catch(err => res.status(404).json({ message: "No university was found" }))
})

// @route   PATCH api/universities/:id
// @desc    Update a university
// @access  Public
router.patch("/:id", (req, res) => {
  const { errors, isValid } = validateUniversityInput(req.body)
  if(!isValid) {
      return res.status(400).json(errors)
  }

  University.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
      .then(university => {
        if(!university){
          return res.status(404).json({message: "University to update not found"});
        } else {
          return res.json(university)
        }
      })
      .catch(err => console.log(err));

})

// @route   DELETE api/universities/:id
// @desc    Remove a university by id
// @access  Public
router.delete("/:id", (req, res) => {
    University.findOneAndDelete({ _id: req.params.id})
        .then(university => {
          if(!university){
            return res.status(404).json({ message: "University to delete not found"});
          } else{
            return res.json( {message: "University deleted"} )
          }
        })
        .catch(err => console.log(err));
})

// @route   DELETE api/universities
// @desc    Get all universities
// @access  Public
router.delete("/", (req, res) => {
    University.deleteMany({})
        .then(university => res.json( {message: "Universities removed"} ))
        .catch(err => res.status(404).json({ message: "No universities to delete" }))
})

module.exports = router
