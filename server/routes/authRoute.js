const express = require('express')
const { signup } = require('../controllers/authController')
const { getAllProduct, getProductById } = require('../controllers/productController')
const router = express.Router()

router.post('/signup', signup)
// router.post('/login',login)
router.get('/products', getAllProduct)
router.get('/product/:id',getProductById)

module.exports = router