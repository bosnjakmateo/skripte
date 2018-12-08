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

// @route   GET api/cities/:id
// @desc    Get city by id
// @access  Public
router.get("/:id", (req, res) => {
    City.findById(req.params.id)
        .then(city => res.json(city))
        .catch(err => res.status(404).json({ message: "No city was found" }))
})

// @route   PATCH api/cities/:id
// @desc    Update a city
// @access  Public
router.patch("/:id", (req, res) => {
  const { errors, isValid } = validateCityInput(req.body)
  if(!isValid) {
      return res.status(400).json(errors)
  }

  City.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
      .then(city => {
        if(!city){
          return res.status(404).json({message: "City to update not found"});
        } else {
          return res.json(city)
        }
      })
      .catch(err => console.log(err));

})

// @route   DELETE api/cities/:id
// @desc    Remove a city by id
// @access  Public
router.delete("/:id", (req, res) => {
    City.findOneAndDelete({ _id: req.params.id})
        .then(city => {
          if(!city){
            return res.status(404).json({ message: "City to delete not found"});
          } else{
            return res.json( {message: "City deleted"} )
          }
        })
        .catch(err => console.log(err));
})

// @route   DELETE api/cities
// @desc    Get all cities
// @access  Public
router.delete("/", (req, res) => {
    City.deleteMany({})
        .then(city => res.json( {message: "Cities removed"} ))
        .catch(err => res.status(404).json({ message: "No cities to delete" }))
})

module.exports = router
