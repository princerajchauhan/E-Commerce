// const Data = require("../Data")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userModel = require("../Models/userModel")
const productModel = require("../Models/productModel")

const register = async (req, res) => {
    try {
        const details = req.body
        const duplicate = await userModel.findOne({ email: details.email })
        if (duplicate) {
            return res.status(200).send({ msg: "user already registered with this email.", msg2: false })
        }
        const hashPass = await bcrypt.hash(details.password, 15)
        const token = jwt.sign({ email: details.email }, process.env.Secret_Key, { expiresIn: "24h" })
        const user = await userModel.create({ ...details, password: hashPass })
        res.status(200).send({ msg: "user created", msg2: true, name: user.name, id: user._id, token })
    } catch (error) {
        res.status(500).send({ Error: error })
    }
}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const findUser = await userModel.findOne({ email: email })
        if (!findUser) {
            return res.status(200).send({ msg: "You are not a registered user", msg2: false })
        }
        const validatePass = bcrypt.compareSync(password, findUser.password)
        if (!validatePass) {
            return res.send({ msg: "email and password does not match ...." })
        }
        const token = jwt.sign({ email }, process.env.Secret_Key, { expiresIn: "24h" })
        res.status(200).send({ msg: 'user successfully logged in', msg2: true, name: findUser.name, id: findUser._id, token })
    } catch (error) {
        res.status(500).send({ Error: error })
    }
}

const getProducts = async (req, res) => {
    try {
        const product = await productModel.find({})
        res.status(200).send(product)
    } catch (error) {
        res.status(500).send({ msg: 'Product not found' })
    }
}

const getSingleProduct = async (req, res) => {
    const singleProduct = await productModel.findOne({ _id: req.params.id })
    res.status(200).send(singleProduct)
}

const addToCart = async (req, res) => {
    try {
        const userId = req.body.id
        const productId = req.body.productId
        const user = await userModel.findById(userId)
        if (user) {
            const cartitemIndex = user.cart.findIndex(item => item.product.equals(productId))
            if (cartitemIndex < 0)
                user.cart.push({ product: productId, quantity: 1 })
            else
                user.cart[cartitemIndex].quantity += 1

            user.save()
            return res.status(200).send({ msg: 'items added to cart', user: user.cart })
        }
        res.status(400).send({ msg: 'user not found' })
    } catch (error) {
        res.status(500).send({ msg: "item not added to cart" })
    }
}

const removeFromCart = async (req, res) => {
    try {
        const userId = req.body.id
        const productId = req.body.productId
        const user = await userModel.findById(userId)
        console.log(user)
        if (user) {
            const cartitemIndex = user.cart.findIndex(item => item.product.equals(productId))
            if (cartitemIndex >= 0) {
                if (user.cart[cartitemIndex].quantity > 1) {
                    user.cart[cartitemIndex].quantity -= 1
                } else
                    user.cart.pull({ product: productId })
            }

            user.save()
            return res.status(200).send({ msg: "item removed from cart", cart: user.cart })
        }
        res.status(400).send({ msg: 'user not found' })
    } catch (error) {
        res.status(500).send({ msg: "item not removed from cart" })
    }
}

const getCartProduct = async (req, res) => {
    try {
        const userId = req.body.id
        const arr = []
        const user = await userModel.findById(userId).populate('cart').exec()
        for (let prod of user.cart) {
            arr.push([await productModel.findOne(prod.product), prod.quantity])
        }
        res.status(200).send({ msg: "Found products related to user", user: arr })
    } catch (error) {
        res.status(500).send({ msg: "Not found the cart product" })
    }
}


module.exports = { getProducts, getSingleProduct, register, userLogin, addToCart, getCartProduct, removeFromCart }