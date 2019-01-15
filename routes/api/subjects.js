const express = require("express")
const router = express.Router()

// Load models
const Subject = require("../../models/Subject")

/**
 * @apiDefine SubjectSuccess
 *
 * @apiSuccess {Id} id Subject id
 * @apiSuccess {String} name Subject name
 * @apiSuccess {String} semester Subject semester
 * @apiSuccess {Id} _college College id
 */

/**
 * @apiDefine SubjectParam
 *
 * @apiParam {String} name Subject name
 * @apiParam {String} semester Subject semester
 * @apiParam {Id} _college College id
 */ 

/**
 * @api {post} subjects/ Add a subject
 * @apiName PostSubject
 * @apiGroup Subject
 *
 * @apiUse SubjectParam
 *
 * @apiUse SubjectSuccess
 * 
 * @apiError {String} message="Subject already exists"
 */
router.post("/", (req, res) => {
    Subject.findOne({ name: req.body.name, _college: req.body._college })
        .then(subject => {
            if (subject) {
                return res.status(400).json({ message: "Subject already exists" })
            } else {
                const newSubject = new Subject(req.body)
                newSubject.save()
                    .then(newSubject => res.json(newSubject))
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
 * @apiUse SubjectSuccess
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
 * @apiName GetSubject
 * @apiGroup Subject
 *
 * @apiParam {Id} id Subject id
 *
 * @apiUse SubjectSuccess
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
 * @apiName PatchSubject
 * @apiGroup Subject
 *
 * @apiParam {Id} id Subject id 
 * @apiUse SubjectParam
 * 
 * @apiUse SubjectSuccess
 * 
 * @apiError {String} message="Subject to update not found"
 */
router.patch("/:id", (req, res) => {
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
 * @apiName DeleteSubject
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
 * @apiName DeleteSubjects
 * @apiGroup Subject
 *
 * @apiSuccess {String} message="Subjects deleted"
 * 
 * @apiError {String} message="No subjects to delete"
 */
router.delete("/", (req, res) => {
    Subject.deleteMany({})
        .then(subject => res.json( {message: "Subjects deleted"} ))
        .catch(err => res.status(404).json({ message: "No subjects to delete" }))
})

module.exports = router
