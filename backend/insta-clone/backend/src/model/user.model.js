const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: [true, "username already exists"]
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [ true, "Email is required" ],
    unique: [true, "email already exists"]
  },
  password: {
    type: String,
    required: [true, "password is required"],
    select: false
  },
  bio: {
    type: String,
    default: ""
  },
  profilePhoto: {
    type: String,
    default: ""
  }
}, { timestamps : true })


const userModel = mongoose.model("user", userSchema)

module.exports = userModel