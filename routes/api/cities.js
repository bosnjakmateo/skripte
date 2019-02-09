const express = require("express")
const router = express.Router()


// Load models
const City = require("../../models/City")

/**
 * @apiDefine CitySuccess
 *
 * @apiSuccess {Id} id City id
 * @apiSuccess {String} name City name
 */

/**
 * @api {post} cities/ Add a city
 * @apiName PostCity
 * @apiGroup City
 *
 * @apiParam {String} name City name
 *
 * @apiUse CitySuccess
 * 
 * @apiError {String} message="City already exists"
 */
router.post("/", (req, res) => {
  City.findOne({ name: req.body.name })
    .then(city => {
      if (city) {
        return res.status(400).json({ message: "City already exists" })
      } else {
        const newCity = new City({
          name: req.body.name
        })
        newCity.save()
          .then(newCity => res.json(newCity))
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
 * @apiUse CitySuccess
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
 * @apiParam {Id} id City id
 *
 * @apiUse CitySuccess
 * 
 * @apiError {String} message="No city was found"
 */
router.get("/:id", (req, res) => {
  City.findById(req.params.id)
    .then(city => res.json(city))
    .catch(err => res.status(404).json({ message: "No city was found" }))
})

/**
 * @api {patch} cities/:id Patch a city
 * @apiName PatchCity
 * @apiGroup City
 *
 * @apiParam {Id} id City id
 * @apiParam {String} name City name
 *
 * @apiUse CitySuccess
 * 
 * @apiError {String} message="City to update not found"
 */
router.patch("/:id", (req, res) => {
  City.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(city => {
      if (!city) {
        return res.status(404).json({ message: "City to update not found" });
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
 * @apiParam {Id} id City id
 *
 * @apiSuccess {String} message="City deleted"
 * 
 * @apiError {String} message="City to delete not found"
 */
router.delete("/:id", (req, res) => {
  City.findOneAndDelete({ _id: req.params.id })
    .then(city => {
      if (!city) {
        return res.status(404).json({ message: "City to delete not found" });
      } else {
        return res.json({ message: "City deleted" })
      }
    })
    .catch(err => console.log(err));
})

/**
 * @api {delete} cities/ Delete all cities
 * @apiName DeleteCities
 * @apiGroup City
 *
 * @apiSuccess {String} message="Cities deleted"
 * 
 * @apiError {String} message="No cities to delete"
 */
router.delete("/", (req, res) => {
  City.deleteMany({})
    .then(city => res.json({ message: "Cities deleted" }))
    .catch(err => res.status(404).json({ message: "No cities to delete" }))
})

module.exports = router
