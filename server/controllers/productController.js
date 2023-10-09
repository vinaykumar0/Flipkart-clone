
const Product = require('../models/productModel')

exports.getAllProduct = async (req, res) => {
    try {
        // const { product } = req.body;
        // if (!product) {
        //     return res.json({
        //         message:"there is no data available"
        //     })
        // }
      const products=await Product.find({})
        return res.status(200).json({
            success: true,
            message: "Fetch all the products",
            products
           
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message:"Error while fetchinfg the product data"
        })
    }
}

exports.getProductById = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findOne({ 'id': id })
        
        return res.status(200).json({
            success:true,
            message: "product fetch successfully",
        product
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error:error.message
        })
     }

}