const Data = require("../Data")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userModel = require("../Models/userModel")

const register = async (req, res) => {
    try {
        const details = req.body
        const duplicate = userModel.findOne({ email: details.email })
        console.log(duplicate)
        if (duplicate) {
            return res.status(200).send({ msg: "user already registered with this emai." })
        }
        const hashPass = await bcrypt.hash(details.password, 15)
        const token = jwt.sign({ email: details.email }, process.env.Secret_Key, { expiresIn: "24h" })
        const user = userModel.create({ ...details, password: hashPass })
        console.log(user)
        res.status(200).send({ msg: "user created", user, token })
    } catch (error) {
        res.status(500).send({ Error: error })
    }
}

const userLogin = async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
}

const getProducts = (req, res) => {
    res.status(200).send(Data)
}

const getSingleProduct = (req, res) => {
    const singleProduct = Data.find(elem => elem.id == req.params.id)
    // console.log(singleProduct)
    res.status(200).send(singleProduct)
}

module.exports = { getProducts, getSingleProduct, register, userLogin }