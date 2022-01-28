const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema(
    {
        title: { type: String, required: true, unique: true},
        desc: { type: String, required: true},
        img: { type: String, required: true},
        categories: { type: Array },
        size: { type: Array },
        color: { type: Array },
        price: { type: Number, required: true },
        inStock: { type: Boolean, default: true },
        sale: { 
            isSale: { type: Boolean, default: false },
            percent: { type: Number, default: 0 },
         },
        view: { type: Number, required: true},
        rating: { type: Number, default: 4, required: true }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Product", ProductSchema)