
const routes = require("express").Router()

const {getProducts, getSingleProduct, register} = require("../Controller/prodController")


routes.post('/register', register)
routes.get("/products", getProducts)
routes.get("/products/:id", getSingleProduct)

module.exports = routes