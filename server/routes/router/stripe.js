const express = require('express');
const PaymentController = require('../../app/controllers/PaymentController')

const router = express.Router();

router.post("/payment", PaymentController.payment)

module.exports = router