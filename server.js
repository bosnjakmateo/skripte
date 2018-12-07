const express = require('express')
const bodyPareser = require("body-parser")
const passport = require("passport")
const mongoose = require("mongoose")

const users = require("./routes/api/users")

const app = express()

// Body parser middleware
app.use(bodyPareser.urlencoded({ extended: false }))
app.use(bodyPareser.json())

// DB config
const db = require("./config/keys").mongoURI

// Passport middleware
app.use(passport.initialize())

// Passport Config
require("./config/passport.js")(passport)

//Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))

// Use routes
app.use("/users", users)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
})
