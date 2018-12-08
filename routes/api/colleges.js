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

// @route   GET api/colleges/:id
// @desc    Get college by id
// @access  Public
router.get("/:id", (req, res) => {
    College.findById(req.params.id)
        .then(college => res.json(college))
        .catch(err => res.status(404).json({ message: "No college was found" }))
})

// @route   PATCH api/colleges/:id
// @desc    Update a college
// @access  Public
router.patch("/:id", (req, res) => {
  const { errors, isValid } = validateCollegeInput(req.body)
  if(!isValid) {
      return res.status(400).json(errors)
  }

  College.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
      .then(college => {
        if(!college){
          return res.status(404).json({message: "College to update not found"});
        } else {
          return res.json(college)
        }
      })
      .catch(err => console.log(err));

})

// @route   DELETE api/colleges/:id
// @desc    Remove a college by id
// @access  Public
router.delete("/:id", (req, res) => {
    College.findOneAndDelete({ _id: req.params.id})
        .then(college => {
          if(!college){
            return res.status(404).json({ message: "College to delete not found"});
          } else{
            return res.json( {message: "College deleted"} )
          }
        })
        .catch(err => console.log(err));
})

// @route   DELETE api/colleges
// @desc    Get all colleges
// @access  Public
router.delete("/", (req, res) => {
    College.deleteMany({})
        .then(college => res.json( {message: "Cities removed"} ))
        .catch(err => res.status(404).json({ message: "No colleges to delete" }))
})

module.exports = router
