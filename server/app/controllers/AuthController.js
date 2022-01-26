const User = require('../models/User')
const CryptoJS = require('crypto-js')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

dotenv.config()

class AuthController {
    //[POST]: 
    register = async (req, res, next) => {
        //Tạo ra thằng User mới:
        const newUser = new User({
            name: req.body.name,
            address: req.body.address,
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
        })

        try{
            //Nếu thành công =>> Lưu user vừa tạo vào mongoDB:
            const savedUser = await newUser.save()
            res.status(200).json(savedUser)
        }catch (err){
            res.status(500).json(err)
        }

    }

    //[POST]: 
    login = async (req, res, next) => {
        try {
            //Lấy ra user trong database theo username nhập vào form login
            const user = await User.findOne({ username: req.body.username })
            !user && res.status(401).json("Wrong credentials!")

            //Password được giải mã:
            const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC)
            const passwordOriginal = hashedPassword.toString(CryptoJS.enc.Utf8)
            //Kiem tra password nhập vào form có match password trong db tạo không:
            passwordOriginal !== req.body.password && 
            res.status(401).json("Wrong credentials!")

            //=========== JON WEB TOKEN ============
            const accessToken = jwt.sign(
                {
                id: user._id,
                isAdmin: user.isAdmin
                },
                process.env.JWT_SEC,
                { expiresIn: "3d" }
            )
            //======================================

            //Lấy ra password và các trường còn lại trong user
            const { password, ...others } = user._doc

            //Chỉ truyền những trường còn lại trừ password
            res.status(200).json({ ...others, accessToken })

        } catch (err){
            res.status(500).json(err)
        }
    }

}

module.exports = new AuthController