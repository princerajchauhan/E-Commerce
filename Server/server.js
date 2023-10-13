const express = require("express")
const cors = require("cors")
const routes = require("./Routing/userRoutes")
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
