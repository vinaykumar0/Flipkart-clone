const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    }, lastName: {
        type: String,
        required: true,
        trim: true
    }, userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true,
    }, email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    }, password: {
        type: String,
        required: true,
        trim: true
    }, password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
    }
})

module.exports = mongoose.model("User", userSchema)