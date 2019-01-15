const express = require("express")
const router = express.Router()

// Load input validation
const validateScriptInput = require("../../validation/script")

// Load models
const Script = require("../../models/Script")

/**
 * @apiDefine ScriptSuccess
 *
 * @apiSuccess {String{5-50}="small"} title Script title
 * @apiSuccess {String{5-200}} description Script description 
 * @apiSuccess {Array[]} likes Script likes
 * @apiSuccess {Id} likes._user User id
 * @apiSuccess {Array[]} dislikes Script dislikes
 * @apiSuccess {Id} dislikes._user User id
 * @apiSuccess {Array[]} comments Script comments
 * @apiSuccess {String} comments.text Comment text 
 * @apiSuccess {String} comments.user Comment user 
 * @apiSuccess {Id} _subject Subject id
 */

/**
 * @api {post} scripts/ Add a script
 * @apiName PostScript
 * @apiGroup Script
 *
 * @apiParam {String{5-50}} title Script title
 * @apiParam {String{5-200}} description Script description
 * @apiParam {Id} _subject Subject id
 *
 * @apiUse ScriptSuccess
 * 
 * @apiError {String} message="Script already exists"
 */
router.post("/", (req, res) => {
    const { errors, isValid } = validateScriptInput(req.body)

    if (!isValid) {
        return res.status(400).json(errors)
    }

    Script.findOne({ name: req.body.name })
        .then(script => {
            if (script) {
                return res.status(400).json({ message: "Script already exists" })
            } else {
                const newScript = new Script(req.body)
                newScript.save()
                    .then(newScript => res.json(newScript))
                    .catch(err => res.json(err))
            }
        })
        .catch(err => req.json(err))
})

/**
 * @api {get} scripts/ Get scripts
 * @apiName GetScripts
 * @apiGroup Script
 *
 * @apiUse ScriptSuccess
 * 
 * @apiError {String} message="No scripts where found"
 */
router.get("/", (req, res) => {
    Script.find()
        .then(script => res.json(script))
        .catch(err => res.status(404).json({ message: "No scripts where found" }))
})

/**
 * @api {get} scripts/:id Get a script
 * @apiName GetScript
 * @apiGroup Script
 * 
 * @apiParam {Id} id Script id
 *
 * @apiUse ScriptSuccess
 * 
 * @apiError {String} message="No script was found"
 */
router.get("/:id", (req, res) => {
    Script.findById(req.params.id)
        .then(script => res.json(script))
        .catch(err => res.status(404).json({ message: "No script was found" }))
})

/**
 * @api {patch} scripts/:id Patch a script
 * @apiName PatchScript
 * @apiGroup Script
 *
 * @apiParam {Id} id Script id
 *
 * @apiUse ScriptSuccess
 * 
 * @apiError {String} message="Script to update not found"
 */
router.patch("/:id", (req, res) => {
  const { errors, isValid } = validateScriptInput(req.body)
  if(!isValid) {
      return res.status(400).json(errors)
  }

  Script.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
      .then(script => {
        if(!script){
          return res.status(404).json({message: "Script to update not found"});
        } else {
          return res.json(script)
        }
      })
      .catch(err => console.log(err));

})

/**
 * @api {delete} scripts/:id Delete a script
 * @apiName DeleteScript
 * @apiGroup Script
 *
 * @apiParam {Id} id Script id
 *
 * @apiSuccess {String} message="Script deleted"
 * 
 * @apiError {String} message="Script to delete not found"
 */
router.delete("/:id", (req, res) => {
    Script.findOneAndDelete({ _id: req.params.id})
        .then(script => {
          if(!script){
            return res.status(404).json({ message: "Script to delete not found"});
          } else{
            return res.json( {message: "Script deleted"} )
          }
        })
        .catch(err => console.log(err));
})

/**
 * @api {delete} scripts/ Delete all scripts
 * @apiName DeleteScripts
 * @apiGroup Script
 *
 * @apiSuccess {String} message="Scripts deleted"
 * 
 * @apiError {String} message="No scripts to delete"
 */
router.delete("/", (req, res) => {
    Script.deleteMany({})
        .then(script => res.json( {message: "Scripts removed"} ))
        .catch(err => res.status(404).json({ message: "No scripts to delete" }))
})

module.exports = router
