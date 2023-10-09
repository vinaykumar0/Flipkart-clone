const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const dotenv = require('dotenv')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const route = require('./routes/authRoute')

const defaultData = require('./default')

const database = require('./config/database')
database.connectDb()

app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))



app.use('/api/v1', route)


app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`)
})

defaultData.defaultData()