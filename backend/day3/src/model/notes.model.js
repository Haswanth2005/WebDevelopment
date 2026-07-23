const mongoose = require("mongoose")

const noteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  code: {
    type: Number,
    required: true
  }
}, { timestamps: true })


note = mongoose.model("noteModel", noteSchema)

module.exports = note;