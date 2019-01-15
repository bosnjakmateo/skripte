const express = require("express")
const router = express.Router()

// Load input validation
const validateSubjectInput = require("../../validation/subject")

// Load models
const Subject = require("../../models/Subject")


/**
 * @api {post} subjects/ Add a subject
 * @apiName PostSubject
 * @apiGroup Subject
 *
 * @apiParam {String} name Subject name 3-50 chars
 * @apiParam {Id} _college College id
 *
 * @apiSuccess {Number} id Subject id
 * @apiSuccess {String} name Subject name
 * @apiParam {Id} _college College id
 * 
 * @apiError {String} message="Subject already exists"
 */
router.post("/", (req, res) => {
    const { errors, isValid } = validateSubjectInput(req.body)

    if (!isValid) {
        return res.status(400).json(errors)
    }

    Subject.findOne({ name: req.body.name })
        .then(subject => {
            if (subject) {
                return res.status(400).json({ message: "Subject already exists" })
            } else {
                const newSubject = new Subject({
                    name: req.body.name
                })
                newSubject.save()
                    .then(newShift => res.json(newShift))
                    .catch(err => res.json(err))
            }
        })
        .catch(err => req.json(err))
})

/**
 * @api {get} subjects/ Get all subjects
 * @apiName GetSubjects
 * @apiGroup Subject
 *
 * @apiSuccess {Id} id Subject id
 * @apiSuccess {String} name Subject name 
 * @apiParam {Id} _college College id
 * 
 * @apiError {String} message="No subjects were found"
 */
router.get("/", (req, res) => {
    Subject.find()
        .then(subject => res.json(subject))
        .catch(err => res.status(404).json({ message: "No subjects where found" }))
})

/**
 * @api {get} subjects/:id Get subject by id
 * @apiName GetCity
 * @apiGroup Subject
 *
 * @apiParam {Id} id Subject id
 *
 * @apiSuccess {Id} id Subject id
 * @apiSuccess {String} name Subject name 
 * @apiParam {Id} _college College id
 * 
 * @apiError {String} message="No subject was found"
 */
router.get("/:id", (req, res) => {
    Subject.findById(req.params.id)
        .then(subject => res.json(subject))
        .catch(err => res.status(404).json({ message: "No subject was found" }))
})

/**
 * @api {patch} subjects/:id Patch a subject
 * @apiName PatchCity
 * @apiGroup Subject
 *
 * @apiParam {Id} id Subject id
 *
 * @apiSuccess {Id} id Subject id
 * @apiSuccess {String} name Subject name
 * @apiParam {Id} _college College id
 * 
 * @apiError {String} message="Subject to update not found"
 */
router.patch("/:id", (req, res) => {
  const { errors, isValid } = validateSubjectInput(req.body)
  if(!isValid) {
      return res.status(400).json(errors)
  }

  Subject.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
      .then(subject => {
        if(!subject){
          return res.status(404).json({message: "Subject to update not found"});
        } else {
          return res.json(subject)
        }
      })
      .catch(err => console.log(err));

})

/**
 * @api {delete} subjects/:id Delete a subject
 * @apiName DeleteCity
 * @apiGroup Subject
 *
 * @apiParam {Id} id Subject id
 *
 * @apiSuccess {String} message="Subject deleted"
 * 
 * @apiError {String} message="Subject to delete not found"
 */
router.delete("/:id", (req, res) => {
    Subject.findOneAndDelete({ _id: req.params.id})
        .then(subject => {
          if(!subject){
            return res.status(404).json({ message: "Subject to delete not found"});
          } else{
            return res.json( {message: "Subject deleted"} )
          }
        })
        .catch(err => console.log(err));
})

/**
 * @api {delete} subjects/ Delete all subjects
 * @apiName DeleteCities
 * @apiGroup Subject
 *
 * @apiSuccess {String} message="Cities deleted"
 * 
 * @apiError {String} message="No subjects to delete"
 */
router.delete("/", (req, res) => {
    Subject.deleteMany({})
        .then(subject => res.json( {message: "Subjects deleted"} ))
        .catch(err => res.status(404).json({ message: "No subjects to delete" }))
})

module.exports = router
