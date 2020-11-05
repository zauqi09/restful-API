const express = require("express")
const bodyParser = require('body-parser')
const router = express.Router()
const jsonParser = bodyParser.json()
const authController = require("../controller/auth")

//router to /login
router.post("/login", authController.login)

//router to /register
router.post("/register", authController.register)


module.exports = router