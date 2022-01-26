const authRouter = require('./router/auth')
const userRouter = require('./router/user')
const productRouter = require('./router/product')
const cartRouter = require('./router/cart')
const orderRouter = require('./router/order')
const stripeRouter = require('./router/stripe')

const route = (app) => {
    app.use('/', authRouter)
    app.use('/user', userRouter)
    app.use('/product', productRouter)
    app.use('/cart', cartRouter)
    app.use('/order', orderRouter)
    app.use('/checkout', stripeRouter)
}

module.exports = route