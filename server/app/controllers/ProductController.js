const Product = require('../models/Product')

class ProductController {
    createProduct = async (req, res, next) => {
        const newProduct = new Product(req.body)
        try{
            const savedProduct = await newProduct.save()
            res.status(200).json(savedProduct)
        }catch (err){
            res.status(500).json(err)
        }
    }

    updateProduct = async (req, res, next) => {
        try{
            const productUpdate = await Product.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            res.status(200).json(productUpdate)
        }catch (err){
            res.status(500).json(err)
        }
    }

    increaseView = async (req, res, next) => {

        try{
            const viewUpdate = await Product.findByIdAndUpdate(req.params.id, {
                 $set: { view: req.body.view + 2 }
            }, { new: true })

            res.status(200).json(viewUpdate)
        }catch (err){
            res.status(500).json(err)
        }
    }

    deleteProduct = async (req, res, next) => {
        try{
            await Product.findByIdAndDelete(req.params.id)
            res.status(200).json("Product delete successfully !")
        }catch (err){
            res.status(500).json(err)
        }
    }

    findAllProduct = async (req, res, next) => {
        const qNew = req.query.new
        const qCategory = req.query.category
        
        try{
            let products;

            if(qNew){
                products = await Product.find().sort({ createdAt: -1 }).limit(1)
            }else if(qCategory){
                products = await Product.find({categories: {
                    $in: [qCategory],
                },
            })
            }else {
                products = await Product.find()
            }
            res.status(200).json(products)
        }catch(err) {
            res.status(500).json(err)
        }
    }

    findProductById = async (req, res, next) => {
        try{
            const getProductById = await Product.findById(req.params.id)
            res.status(200).json(getProductById)
        }catch(err) {
            res.status(500).json(err)
        }
    }
}

module.exports = new ProductController