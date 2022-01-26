const Cart = require('../models/Cart')

class CartController {
    createCart = async (req, res, next) => {
        const newCart = new Cart(req.body)
        try{
            const savedCart = await newCart.save()
            res.status(200).json(savedCart)
        }catch (err){
            res.status(500).json(err)
        }
    }

    updateCart = async (req, res, next) => {
        try{
            const cartUpdate = await Cart.findByIdAndUpdate(req.params.id, 
            {
                $set: req.body
            }, 
            { new: true })
            res.status(200).json(cartUpdate)
        }catch (err){
            res.status(500).json(err)
        }
    }

    deleteCart = async (req, res, next) => {
        try{
            await Cart.findByIdAndDelete(req.params.id)
            res.status(200).json("Cart delete successfully !")
        }catch (err){
            res.status(500).json(err)
        }
    }

    getUserCart = async (req, res, next) => {
        try{
            const cart = await Cart.findOne({ userId: req.params.id })
            res.status(200).json(cart)
        }catch(err) {
            res.status(500).json(err)
        }
    }

    getAllCart = async (req, res, next) => {
        try{
            const carts = await Cart.find()
            res.status(200).json(carts)
        }catch(err){
            res.status(500).json(err)
        }
    }
}

module.exports = new CartController