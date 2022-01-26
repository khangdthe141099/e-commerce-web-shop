const express = require('express')
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken')
const UserController = require('../../app/controllers/UserController')

const router = express.Router()

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, UserController.updateUser)

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, UserController.deleteUser)

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, UserController.getUser)

//GET ALL USER:
router.get("/find", verifyTokenAndAdmin, UserController.getAllUser)

//GET USER STATS:
router.get("/stats", verifyTokenAndAdmin, UserController.getStatsUser)

module.exports = router