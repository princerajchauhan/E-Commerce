const express = require("express")
const cors = require("cors")
const routes = require("./Routing/userRoutes")
const stripe = require("stripe")("sk_test_51O2pl0SGM01vn0zuKIwBY1RFHXOkVkpDUaVxyzpaQO8Oa05d5vQvL79WlYv6UrvioVxclgPOSDuBG4DBPoJ88HcU00HWS0x9PV")
const connectToDb = require("./Db/connection")

require('dotenv').config()

const port = process.env.PORT

const server = express()
server.use(cors())

server.use(express.json())

server.use("/api", routes)

const startConnection = async () => {
    try {
        await connectToDb(process.env.Mongo_URI)
        server.listen(port, () => console.log(`Server is running on port: ${port}`))
    } catch (error) {
        console.log(error)
    }
}

startConnection()

server.use("/api/create-checkout-session", async (req, res) => {
    const {products} = req.body
    // console.log(products[0][1])

    const lineItems = products.map((product) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: product[0].name
            },
            unit_amount: product[0].price
        },
        quantity: product[1]
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: "https://prince-ecom.vercel.app/success",
        cancel_url: "https://prince-ecom.vercel.app//cancel"
    })
    res.json({id: session.id})
})
