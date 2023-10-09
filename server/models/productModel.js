// const mongoose = require('mongoose')
const mongoose = require('mongoose')
// const autoIncrement=mongoose.autoIncrement

const productSchema = new mongoose.Schema(
    {
    id: {
        type: String,
        // required: true,
        unique: true
    },
    url: {
        type: String,
        // required: true,
        unique: true
    },
    detailUrl: {
        type: String,
        // required: true,
        unique: true
    },
    title: {
        type: Object,
        // required: true,
        unique: true
    },
    price: {
        type: Object,
        // required: true,
        unique: true
    },
    quantity: {
        type: String,
        // required: true,
        unique: true
    },
    description: {
        type: String,
        // required: true,
        unique: true
    },
    discount: {
        type: String,
        // required: true,
        unique: true
    },
    tagline: {
        type: String,
        // required: true,
        unique: true
        }

    })
// autoIncrement.initialize(mongoose.connection)
// productSchema.plugin(autoIncrement.plugin, 'Product')


module.exports = mongoose.model("Product", productSchema);