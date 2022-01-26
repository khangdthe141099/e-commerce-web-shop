const express = require('express')
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken')
const ProductController = require('../../app/controllers/ProductController')

const router = express.Router()

router.post("/create", verifyTokenAndAdmin, ProductController.createProduct)

router.put("/:id", verifyTokenAndAdmin, ProductController.updateProduct)

//Tăng view của sản phẩm khi xem chi tiết mỗi sản phẩm:
router.patch("/:id", ProductController.increaseView)

router.delete("/:id", verifyTokenAndAdmin, ProductController.deleteProduct)

router.get("/", ProductController.findAllProduct)

router.get("/find/:id", ProductController.findProductById)



module.exports = router