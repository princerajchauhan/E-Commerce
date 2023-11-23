const mongoose = require("mongoose")

const Schema = mongoose.Schema

const productSchema = new Schema({
    // id: Number,
    // name: String,
    // price: Number,
    // company: String,
    // colors: [{type:String}],
    // image: String,
    // description: String,
    // category: String,
    // stars: Number,
    // reviews: Number,
    // stock: Number
}, {strict: false})

module.exports = mongoose.model('productdetail', productSchema)