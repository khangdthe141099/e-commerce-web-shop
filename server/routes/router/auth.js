const express = require('express')
const AuthController = require('../../app/controllers/AuthController')

const router = express.Router()

//REGISTER:
router.post("/register", AuthController.register)
//LOGIN:
router.post("/login", AuthController.login)


module.exports = router