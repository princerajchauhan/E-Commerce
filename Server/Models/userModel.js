const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        maxlength: [20, 'Name should be less than 20 character'],
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        maxlength: [10, 'Mobile number should be of 10 digits'],
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    }
})

module.exports = mongoose.model("UserDetail", userSchema)