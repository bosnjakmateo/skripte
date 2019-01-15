const express = require("express")
const router = express.Router()

// Load models
const Field = require("../../models/Field")

/**
 * @apiDefine FieldSuccess
 *
 * @apiSuccess {Id} id Field id
 * @apiSuccess {String} name Field name
 * @apiSuccess {Id} _college College name
 */

/**
 * @api {post} fields/ Add a field
 * @apiName PostField
 * @apiGroup Field
 *
 * @apiParam {String} name Field name
 * @apiParam {Id} _college College name
 *
 * @apiUse FieldSuccess
 * 
 * @apiError {String} message="Field already exists"
 */
router.post("/", (req, res) => {
    Field.findOne({ name: req.body.name, _college: req.body._college })
        .then(field => {
            if (field) {
                return res.status(400).json({ message: "Field already exists" })
            } else {
                const newField = new Field(req.body)
                newField.save()
                    .then(newField => res.json(newField))
                    .catch(err => res.json(err))
            }
        })
        .catch(err => req.json(err))
})

/**
 * @api {get} fields/ Get all fields
 * @apiName GetFields
 * @apiGroup Field
 *
 * @apiUse FieldSuccess
 * 
 * @apiError {String} message="No fields were found"
 */
router.get("/", (req, res) => {
    Field.find()
        .then(field => res.json(field))
        .catch(err => res.status(404).json({ message: "No fields where found" }))
})

/**
 * @api {get} fields/:id Get field by id
 * @apiName GetField
 * @apiGroup Field
 *
 * @apiParam {Id} id Field id
 *
 * @apiUse FieldSuccess
 * 
 * @apiError {String} message="No field was found"
 */
router.get("/:id", (req, res) => {
    Field.findById(req.params.id)
        .then(field => res.json(field))
        .catch(err => res.status(404).json({ message: "No field was found" }))
})

/**
 * @api {patch} fields/:id Patch a field
 * @apiName PatchField
 * @apiGroup Field
 *
 * @apiParam {Id} id Field id
 * @apiParam {String} name Field name
 * @apiParam {Id} _college College name
 *
 * @apiUse FieldSuccess
 * 
 * @apiError {String} message="Field to update not found"
 */
router.patch("/:id", (req, res) => {
  Field.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
      .then(field => {
        if(!field){
          return res.status(404).json({message: "Field to update not found"});
        } else {
          return res.json(field)
        }
      })
      .catch(err => console.log(err));

})

/**
 * @api {delete} fields/:id Delete a field
 * @apiName DeleteField
 * @apiGroup Field
 *
 * @apiParam {Id} id Field id
 *
 * @apiSuccess {String} message="Field deleted"
 * 
 * @apiError {String} message="Field to delete not found"
 */
router.delete("/:id", (req, res) => {
    Field.findOneAndDelete({ _id: req.params.id})
        .then(field => {
          if(!field){
            return res.status(404).json({ message: "Field to delete not found"});
          } else{
            return res.json( {message: "Field deleted"} )
          }
        })
        .catch(err => console.log(err));
})

/**
 * @api {delete} fields/ Delete all fields
 * @apiName DeleteFields
 * @apiGroup Field
 *
 * @apiSuccess {String} message="Fields deleted"
 * 
 * @apiError {String} message="No fields to delete"
 */
router.delete("/", (req, res) => {
    Field.deleteMany({})
        .then(field => res.json( {message: "Fields deleted"} ))
        .catch(err => res.status(404).json({ message: "No fields to delete" }))
})

module.exports = router
