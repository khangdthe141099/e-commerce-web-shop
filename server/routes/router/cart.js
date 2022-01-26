const express = require('express')
const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require('./verifyToken')
const CartController = require('../../app/controllers/CartController')

const router = express.Router()

router.post("/", verifyToken, CartController.createCart)

router.put("/:id", verifyTokenAndAuthorization, CartController.updateCart)

router.delete("/:id", verifyTokenAndAuthorization, CartController.deleteCart)

router.get("/find/:id", verifyTokenAndAuthorization, CartController.getUserCart)

router.get("/", verifyTokenAndAdmin, CartController.getAllCart)


module.exports = router