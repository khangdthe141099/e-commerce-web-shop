const express = require('express')
const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require('./verifyToken')
const OrderController = require('../../app/controllers/OrderController')

const router = express.Router()

router.post("/", verifyToken, OrderController.createOrder)

router.put("/:id", verifyTokenAndAdmin, OrderController.updateOrder)

router.delete("/:id", verifyTokenAndAdmin, OrderController.deleteOrder)

router.get("/find/:id", verifyTokenAndAuthorization, OrderController.getUserOrder)

router.get("/", verifyTokenAndAdmin, OrderController.getAllOrder)

//GET MONTHLY INCOME:
router.get("/income", verifyTokenAndAdmin, OrderController.getMonthlyIncome)

module.exports = router