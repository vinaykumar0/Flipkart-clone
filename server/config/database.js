const mongoose = require('mongoose')
require('dotenv').config()

exports.connectDb = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("Db connect successfully"))
        .catch((error) => {
            console.log("Db Not connect", error)
            process.exit(1)
        })
}