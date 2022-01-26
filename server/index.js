const express = require('express')
const connect = require('./config/database')
const route = require('./routes')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

const port = process.env.PORT

//=================================================
//Config
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())

//==================================================

//Connect to mongoDB
connect()

//==================================================
//CORS:
app.use(cors())
//Route init
route(app)

//==================================================



//Cho phép ứng dụng chạy trên PORT nào:
app.listen(port || 5000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



