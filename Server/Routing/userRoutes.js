
const routes = require("express").Router()

const {getProducts, getSingleProduct, register, userLogin, addToCart, getCartProduct, removeFromCart} = require("../Controller/prodController")


routes.post('/register', register)
routes.post('/login', userLogin)
routes.get("/products", getProducts)
routes.get("/products/:id", getSingleProduct)
routes.post("/addtocart", addToCart)
routes.post("/getcart", getCartProduct)
routes.post("/removeproduct", removeFromCart)

module.exports = routes