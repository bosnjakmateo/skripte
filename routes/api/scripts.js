const express = require("express")
const router = express.Router()
const passport = require("passport")
const multer = require('multer')
const upload = multer({ dest: 'C:/temp/' })

// Load input validation
const validateScriptInput = require("../../validation/script")

// Load models
const Script = require("../../models/Script")
const User = require("../../models/User")

/**
 * @apiDefine ScriptSuccess
 *
 * @apiSuccess {String{5-50}} title Script title
 * @apiSuccess {String{10-200}} description Script description 
 * @apiSuccess {String} pdf Script pdf path 
 * @apiSuccess {Array[]} likes Script likes
 * @apiSuccess {Id} likes._user User id
 * @apiSuccess {Array[]} dislikes Script dislikes
 * @apiSuccess {Id} dislikes._user User id
 * @apiSuccess {Array[]} comments Script comments
 * @apiSuccess {String} comments.text Comment text 
 * @apiSuccess {String} comments.user Comment user 
 * @apiSuccess {Date} comments.date Comment date 
 * @apiSuccess {Date} date Script date 
 * @apiSuccess {String} user User who added script 
 * @apiSuccess {Id} _subject Subject id
 */

/**
 * @api {post} scripts/ Add a script
 * @apiName PostScript
 * @apiGroup Script
 *
 * @apiParam {String{5-50}} title Script title
 * @apiParam {String{10-200}} description Script description
 * @apiParam {File} pdf Script pdf file
 * @apiParam {Id} _subject Subject id
 * 
 * @apiHeader {String} token User token
 *
 * @apiUse ScriptSuccess
 * 
 * 
 * @apiError {String} message="Script already exists || No file was uploaded || No user found"
 */
router.post("/", passport.authenticate("jwt", { session: false }), upload.single('pdf'), (req, res) => {
  //console.log(req.file)
  const { errors, isValid } = validateScriptInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  Script.findOne({ title: req.body.title })
    .then(script => {
      if (script) {
        return res.status(400).json({ message: "Script already exists" })
      } else {
        req.body.user = req.user.username

        const newScript = new Script(req.body)
        newScript.save()
          .then(newScript => res.json(newScript))
          .catch(err => res.json(err))

        User.findById(req.user._id)
          .then(user => {
            const newUserScript = {
              _script: newScript._id
            }

            user.scripts.unshift(newUserScript)

            user.save()
            console.log("Script added to users scripts")
            //.then(res.status(200).json({ message: "Script added to users scripts" }))
          })
          .catch(err => res.status(404).json({ message: "No user found" }))
      }
    })
    .catch(err => res.json(err))
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
 * @apiParam {String{5-50}} title Script title
 * @apiParam {String{10-200}} description Script description
 * @apiParam {Id} _subject Subject id
 *
 * @apiUse ScriptSuccess
 * 
 * @apiError {String} message="Script to update not found"
 */
router.patch("/:id", (req, res) => {
  const { errors, isValid } = validateScriptInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  Script.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(script => {
      if (!script) {
        return res.status(404).json({ message: "Script to update not found" })
      } else {
        return res.json(script)
      }
    })
    .catch(err => console.log(err))

})

/**
 * @api {post} scripts/comment/:id Post a comment for a script
 * @apiName PostComment
 * @apiGroup Script
 *
 * @apiParam {Id} id Script id
 * @apiParam {String} text Comment text
 * 
 * @apiHeader {String} token User token
 *
 * @apiUse ScriptSuccess
 * 
 * @apiError {String} message="No script found"
 */
router.post("/comments/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
  Script.findById(req.params.id)
    .then(script => {
      const newComment = {
        text: req.body.text,
        user: req.user.username,
        date: Date.now()
      }

      script.comments.unshift(newComment)

      script.save().then(script => res.json(script))
    })
    .catch(err => res.status(404).json({ message: "No script found" }))
})

/**
 * @api {post} scripts/comment/:id/:commentId Delete a comment from a script
 * @apiName DeleteComment
 * @apiGroup Script
 *
 * @apiParam {Id} id Script id
 * @apiParam {CommentId} commentId Comment id
 * 
 * @apiHeader {String} token User token
 *
 * @apiSuccess {String} message="Comment deleted"
 * 
 * @apiError {String} message="No script found || No comment found"
 */
router.delete("/comments/:id/:commentId", passport.authenticate("jwt", { session: false }), (req, res) => {
  Script.findById(req.params.id)
    .then(script => {
      let flag = false

      script.comments.forEach(c => {
        if (JSON.stringify(c._id) === JSON.stringify(req.params.commentId)) {
          script.comments = script.comments.filter(i => i !== c)
          flag = true
        }
      })

      if (!flag) {
        res.json({ message: "No comment found" })
      }

      script.save().then(script => res.json({ message: "Comment deleted" }))
    })
    .catch(err => res.status(404).json({ message: "No script found" }))
})

/**
 * @api {post} scripts/favorites/:id Add script to favorites
 * @apiName PostFavorite
 * @apiGroup Script
 *
 * @apiParam {Id} id Script id
 * 
 * @apiHeader {String} token User token
 *
 * @apiSuccess {String} message="Script added to favorites"
 * 
 * @apiError {String} message="Script not found || No script found || Script already added to favorites"
 */
router.post("/favorites/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
  Script.findById(req.params.id)
    .then(script => {
      if (!script) {
        return res.status(404).json({ message: "Script not found" })
      }
      else {
        User.findById(req.user._id)
          .then(user => {
            let newFavorite = {
              _id: req.params.id
            }

            user.favoriteScripts.forEach(i => {
              if (JSON.stringify(i) === JSON.stringify(newFavorite))
                res.status(400).json({ message: "Script already added to favorites" })
            })

            user.favoriteScripts.unshift(newFavorite)

            user.save().then(res.status(200).json({ message: "Script added to favorites" }))
          })
          .catch(err => res.status(404).json({ message: "No user found" }))
      }
    })
    .catch(err => console.log(err))
})

/**
 * @api {post} scripts/favorites/:id Delete script from favorites
 * @apiName DeleteFavorite
 * @apiGroup Script
 *
 * @apiParam {Id} id Script id
 * 
 * @apiHeader {String} token User token
 *
 * @apiSuccess {String} message="Script deleted from favorites"
 * 
 * @apiError {String} message="Script not found/No script found"
 */
router.delete("/favorites/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
  Script.findById(req.params.id)
    .then(script => {
      if (!script) {
        return res.status(404).json({ message: "Script not found" })
      }
      else {
        User.findById(req.user._id)
          .then(user => {
            let newFavorite = {
              _id: req.params.id
            }

            user.favoriteScripts.forEach(i => {
              if (JSON.stringify(i) === JSON.stringify(newFavorite)) {
                user.favoriteScripts = user.favoriteScripts.filter(j => j !== i)
              }
            })

            user.save().then(res.status(200).json({ message: "Script added to favorites" }))
          })
          .catch(err => res.status(404).json({ message: "No user found" }))
      }
    })
    .catch(err => console.log(err))
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
  Script.findOneAndDelete({ _id: req.params.id })
    .then(script => {
      if (!script) {
        return res.status(404).json({ message: "Script to delete not found" });
      } else {
        return res.json({ message: "Script deleted" })
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
    .then(script => res.json({ message: "Scripts removed" }))
    .catch(err => res.status(404).json({ message: "No scripts to delete" }))
})

module.exports = router
