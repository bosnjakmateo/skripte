const express = require("express")
const router = express.Router()

// Load input validation
const validateCollegeInput = require("../../validation/college")

// Load models
const College = require("../../models/College")

/**
 * @apiDefine CollegeSuccess
 *
 * @apiSuccess {Id} id College id
 * @apiSuccess {Id} _city City id
 * @apiSuccess {Id} _university University id
 */

 /**
 * @apiDefine CollegeParam
 *
 * @apiParam {String{2-50}} name College name
 * @apiParam {Id} _city City id
 * @apiParam {Id} _university University id
 */

/**
 * @api {post} colleges/ Add a college
 * @apiName PostCollege
 * @apiGroup College
 *
 * @apiUse CollegeParam
 *
 * @apiUse CitySuccess
 * 
 * @apiError {String} message="College already exists"
 */
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


/**
 * @api {get} colleges/ Get all colleges
 * @apiName GetColleges
 * @apiGroup College
 *
 * @apiUse CitySuccess
 * 
 * @apiError {String} message="No colleges where found"
 */
router.get("/", (req, res) => {
    College.find()
        .then(college => res.json(college))
        .catch(err => res.status(404).json({ message: "No colleges where found" }))
})


/**
 * @api {get} colleges/:id Get a college
 * @apiName GetCollege
 * @apiGroup College
 * 
 * @apiParam {Id} id College id
 *
 * @apiUse CitySuccess
 * 
 * @apiError {String} message="No college was found"
 */
router.get("/:id", (req, res) => {
    College.findById(req.params.id)
        .then(college => res.json(college))
        .catch(err => res.status(404).json({ message: "No college was found" }))
})


/**
 * @api {patch} colleges/:id Patch a college
 * @apiName PatchCollege
 * @apiGroup College
 * 
 * @apiParam {Id} id College id
 * @apiUse CollegeParam
 *
 * @apiUse CitySuccess
 * 
 * @apiError {String} message="College to update not found"
 */
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


/**
 * @api {delete} colleges/:id Delete a college
 * @apiName DeleteCollege
 * @apiGroup College
 * 
 * @apiParam {Id} id College id
 *
 * @apiSuccess {String} message="College deleted"
 * 
 * @apiError {String} message="College to delete not found"
 */
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

/**
 * @api {delete} colleges/ Delete all colleges
 * @apiName DeleteColleges
 * @apiGroup College
 *
 * @apiSuccess {String} message="Colleges deleted"
 * 
 * @apiError {String} message="No colleges to delete"
 */
router.delete("/", (req, res) => {
    College.deleteMany({})
        .then(college => res.json( {message: "Colleges deleted"} ))
        .catch(err => res.status(404).json({ message: "No colleges to delete" }))
})

module.exports = router
