const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const keys = require("../../config/keys")
const passport = require("passport")

// Load input validation
const validateUserInput = require("../../validation/user")

// Load models
const User = require("../../models/User")

/**
 * @apiDefine UserSuccess
 *
 * @apiSuccess {Id} id User id
 * @apiSuccess {String} username User username
 * @apiSuccess {Email} email User email
 */

/**
 * @api {post} users/register Regsiter a user
 * @apiName PostUser
 * @apiGroup User
 *
 * @apiParam {String{3-20}} username User username
 * @apiParam {String{6-30}} password User password
 * @apiParam {Email} email User email
 *
 * @apiUse UserSuccess
 * 
 * @apiError {String} message="Email already exists"
 */
router.post("/register", (req, res) => {
  const { errors, isValid } = validateUserInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ message: "Email already exists" })
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          newUser.password = hash
          newUser
            .save()
            .then(user => {
              res.json({
                "_id": user._id,
                "username": user.username,
                "email": user.email
              })
            })
            .catch(err => console.log(err))
        })
      })
    }
  })
})

/**
 * @api {post} users/login Login a user
 * @apiName LoginUser
 * @apiGroup User
 *
 * @apiParam {String{6-30}} password User password
 * @apiParam {Email} email User email
 *
 * @apiSuccess {Boolean} success="true" Login success
 * @apiSuccess {String} token="'Bearer' + token" Login token
 * 
 * @apiError {String} message="User not found || Password incorrect"
 */
router.post("/login", (req, res) => {
  const email = req.body.email
  const password = req.body.password

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        const payload = { id: user.id, email: user.email } // Create JWT Payload

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            })
          }
        )
      } else {
        return res.status(400).json({ message: "Password incorrect" })
      }
    })
  })
})


/**
 * @api {get} users/current Returns current user
 * @apiName CurrentUser
 * @apiGroup User
 *
 * @apiHeader {String} token User token
 *
 * @apiSuccess {String} username User username
 * @apiSuccess {Email} email User email
 * @apiSuccess {Array} favoriteSubjects User favorite subjects
 * @apiSuccess {Id} favoriteSubjects._id User favorite subject
 * @apiSuccess {Array} favoriteScripts User favorite scripts
 * @apiSuccess {Id} favoriteScripts._id User favorite script
 * @apiSuccess {Array} scripts User scripts
 * @apiSuccess {Id} scripts._script User script
 * @apiSuccess {Tutorial} tutorial User tutorial
 * @apiSuccess {Theme} theme User theme
 */
router.get("/current", passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      username: req.user.username,
      email: req.user.email,
      favoriteSubjects: req.user.favoriteSubjects,
      favoriteScripts: req.user.favoriteScripts,
      scripts: req.user.scripts,
      tutorial: req.user.tutorial,
      theme: req.user.theme
    })
  }
)

/**
 * @api {patch} users/tutorial Set tutorial to true
 * @apiName TutorialUser
 * @apiGroup User
 *
 * @apiHeader {String} token User token
 *
 * @apiSuccess {String} message="Tutorial set to true"
 */
router.patch("/tutorial", passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findByIdAndUpdate({_id: req.user.id})
      .then(user => {
        if(!user){
          return res.status(404).json({ message: "User not found" })
        } else {
          user.tutorial = true
          user.save()
          return res.json({ message: "Tutorial set to true" })
        }
      })
      .catch(err => console.log(err))
  }
)

/**
 * @api {patch} users/theme Set theme
 * @apiName ThemeUser
 * @apiGroup User
 * 
 * @apiParam {String="Light || Dark"} theme User theme
 *
 * @apiHeader {String} token User token
 *
 * @apiSuccess {String} message="Theme changed"
 */
router.patch("/theme", passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findByIdAndUpdate({_id: req.user.id})
      .then(user => {
        if(!user){
          return res.status(404).json({ message: "User not found" })
        } else {
          user.theme = req.body.theme
          user.save()
          return res.json({ message: "Theme changed" })
        }
      })
      .catch(err => console.log(err))
  }
)


module.exports = router
