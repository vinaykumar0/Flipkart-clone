const Product = require("./models/productModel")
const{ products} = require('./constant/data')



exports.defaultData = async () => {
    try {
        await Product.deleteMany();
        const response = await Product.insertMany(products)
        console.log(response)
        console.log("Product data fetching successfully")
    } catch (error) {
        console.log("Error while fetching the data", error.message)
    }
}