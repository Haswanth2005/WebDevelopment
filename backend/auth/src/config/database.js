const mongoose = require("mongoose")

const connnectToDb = () => {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    console.log("connected to database");

  })
}

module.exports = connnectToDb