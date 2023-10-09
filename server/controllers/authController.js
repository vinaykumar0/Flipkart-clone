const User = require('../models/userModel')

exports.signup = async (req, res) => {
    try {
        console.log(req.body)
        const {
            email, firstName, lastName, password, userName, phone
        } = req.body

        if (!userName || !firstName || !lastName || !email || !password) {
            return res.status(401).json({
                success: false,
                message: "All field are required"
            })
        }
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.json({
                message: "user aleardy exist"
            })
        }

        const existingUserName = await User.findOne({ userName })
        if (existingUserName) {
            return res.status({
                message: "Existing Username"
            })
        }

        const user = await User.create({ firstName, lastName, email, password, userName, phone })

        return res.status(200).json({
            success: true,
            message: "User signup successfully",
            user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Cann't signup user",
            error: error.message
        })
    }
}