const express = require("express")
const router = express.Router()

// Load input validation
const validateCityInput = require("../../validation/city")

// Load models
const City = require("../../models/City")


/**
 * @api {post} cities/ Add a city
 * @apiName PostCity
 * @apiGroup City
 *
 * @apiParam {String} name City name 3-50 chars
 *
 * @apiSuccess {Number} id City id
 * @apiSuccess {String} name City name
 * 
 * @apiError {String} message="City already exists"
 */
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

/**
 * @api {get} cities/ Get all cities
 * @apiName GetCities
 * @apiGroup City
 *
 * @apiSuccess {Number} id City id
 * @apiSuccess {String} name City name 
 * 
 * @apiError {String} message="No cities were found"
 */
router.get("/", (req, res) => {
    City.find()
        .then(city => res.json(city))
        .catch(err => res.status(404).json({ message: "No cities where found" }))
})

/**
 * @api {get} cities/:id Get city by id
 * @apiName GetCity
 * @apiGroup City
 *
 * @apiParam {Number} id City id
 *
 * @apiSuccess {Number} id City id
 * @apiSuccess {String} name City name 
 * 
 * @apiError {String} message="No city was found"
 */
router.get("/:id", (req, res) => {
    City.findById(req.params.id)
        .then(city => res.json(city))
        .catch(err => res.status(404).json({ message: "No city was found" }))
})

/**
 * @api {patch} cities/:id Edit a city
 * @apiName PatchCity
 * @apiGroup City
 *
 * @apiParam {Number} id City id
 *
 * @apiSuccess {Number} id City id
 * @apiSuccess {String} name City name
 * 
 * @apiError {String} message="City to update not found"
 */
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

/**
 * @api {delete} cities/:id Delete a city
 * @apiName DeleteCity
 * @apiGroup City
 *
 * @apiParam {Number} id City id
 *
 * @apiSuccess {String} message="City deleted"
 * 
 * @apiError {String} message="City to delete not found"
 */
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

/**
 * @api {delete} cities/:id Delete all cities
 * @apiName DeleteCities
 * @apiGroup City
 *
 * @apiSuccess {String} message="Cities deleted"
 * 
 * @apiError {String} message="No cities to delete"
 */
router.delete("/", (req, res) => {
    City.deleteMany({})
        .then(city => res.json( {message: "Cities deleted"} ))
        .catch(err => res.status(404).json({ message: "No cities to delete" }))
})

module.exports = router
