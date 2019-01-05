const express = require("express")
const router = express.Router()

// Load input validation
const validateUniversityInput = require("../../validation/university")

// Load models
const University = require("../../models/University")

/**
 * @api {post} universities/ Add a university
 * @apiName PostUniversity
 * @apiGroup University
 *
 * @apiParam {String{5-50}} name University name
 * 
 * @apiSuccess {Number} id University id
 * @apiSuccess {String} name University name
 * 
 * @apiError {String} message="University already exists"
 */
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

/**
 * @api {get} universities/ Get all university
 * @apiName GetUniversities
 * @apiGroup University
 * 
 * 
 * @apiSuccess {Number} id University id
 * @apiSuccess {String} name University name
 * 
 * @apiError {String} message="No universities where found"
 */
router.get("/", (req, res) => {
    University.find()
        .then(university => res.json(university))
        .catch(err => res.status(404).json({ message: "No universities where found" }))
})

/**
 * @api {get} universities/:id Get university by id
 * @apiName GetUniversity
 * @apiGroup University
 * 
 * @apiParam {Number} id University id
 * 
 * @apiSuccess {Number} id University id
 * @apiSuccess {String} name University name
 * 
 * @apiError {String} message="No university was found"
 */
router.get("/:id", (req, res) => {
    University.findById(req.params.id)
        .then(university => res.json(university))
        .catch(err => res.status(404).json({ message: "No university was found" }))
})

/**
 * @api {patch} universities/:id Edit a university
 * @apiName PatchUniversity
 * @apiGroup University
 *
 * @apiParam {Number} id University id
 *
 * @apiSuccess {Number} id University id
 * @apiSuccess {String} name University name
 * 
 * @apiError {String} message="University to update not found"
 */
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

/**
 * @api {delete} universities/:id Delete a university
 * @apiName DeleteUniversity
 * @apiGroup University
 *
 * @apiParam {Number} id University id
 *
 * @apiSuccess {String} message="University deleted"
 * 
 * @apiError {String} message="University to delete not found"
 */
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
/**
 * @api {delete} subjects/ Delete all universities
 * @apiName DeleteUniversities
 * @apiGroup University
 *
 * @apiSuccess {String} message="Universities deleted"
 * 
 * @apiError {String} message="No universities to delete"
 */
router.delete("/", (req, res) => {
    University.deleteMany({})
        .then(university => res.json( {message: "Universities deleted"} ))
        .catch(err => res.status(404).json({ message: "No universities to delete" }))
})

module.exports = router
