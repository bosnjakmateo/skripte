const express = require('express')
const bodyParser = require("body-parser")
const passport = require("passport")
const mongoose = require("mongoose")

const users = require("./routes/api/users")
const cities = require("./routes/api/cities")
const colleges = require("./routes/api/colleges")
const scripts = require("./routes/api/scripts")
const subjects = require("./routes/api/subjects")
const universities = require("./routes/api/universities")
const fields = require("./routes/api/fields")

const app = express()

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Passport middleware
app.use(passport.initialize())

// Passport Config
require("./config/passport.js")(passport)

//DB config; Connect to MongoDB
if (process.env.NODE_ENV === 'test') {
  const db = require("./config/keys").mongoURITest

  mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))
} else {
  const db = require("./config/keys").mongoURI

  mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))
}

// Use routes
app.use("/users", users)
app.use("/cities", cities)
app.use("/colleges", colleges)
app.use("/scripts", scripts)
app.use("/subjects", subjects)
app.use("/universities", universities)
app.use("/fields", fields)

const port = process.env.PORT || 5000

module.exports = app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})
