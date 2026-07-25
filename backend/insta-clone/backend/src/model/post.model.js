const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user"
  },
  caption: {
    type: String,
    default: ""
  },
  image: {
    type: String,
    required: true
  } 
}, { timestamps: true })

const postModel = mongoose.model("post", postSchema)

module.exports = postModel