const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config()

const connect = async () => {
    await mongoose
          .connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
          .then(() => console.log('Connect successfully !'))
          .catch(err => console.log(err.message))
}

module.exports = connect