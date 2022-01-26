const Order = require('../models/Order')

class OrderController {
    createOrder = async (req, res, next) => {
        const newOrder = new Order(req.body)
        try {
            const savedOrder = await newOrder.save()
            res.status(200).json(savedOrder)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    updateOrder = async (req, res, next) => {
        try {
            const orderUpdate = await Order.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body
                },
                { new: true })
            res.status(200).json(orderUpdate)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    deleteOrder = async (req, res, next) => {
        try {
            await Order.findByIdAndDelete(req.params.id)
            res.status(200).json("Cart delete successfully !")
        } catch (err) {
            res.status(500).json(err)
        }
    }

    getUserOrder = async (req, res, next) => {
        try {
            const order = await Order.find({ userId: req.params.id })
            res.status(200).json(order)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    getAllOrder = async (req, res, next) => {
        try {
            const orders = await Order.find()
            res.status(200).json(orders)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    getMonthlyIncome = async (req, res, next) => {
        const date = new Date();
        const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
        const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

        try {
            const income = await Order.aggregate([
                { $match: { createdAt: { $gte: previousMonth } } },
                {
                    $project: {
                        month: { $month: "$createdAt" },
                        sales: "$amount",
                    },
                },
                {
                    $group: {
                        _id: "$month",
                        total: { $sum: "$sales" },
                    },
                },
            ]);
            res.status(200).json(income);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new OrderController