const mongoose = require("mongoose")

const connectToDb =  (uri) => mongoose.connect(uri)
    .then(() => console.log("connected to Database...."))
    .catch(err => console.log(err))

module.exports = connectToDb