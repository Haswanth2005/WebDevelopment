const mongoose = require('mongoose');


function connectToDB() {
  mongoose.connect("mongodb+srv://haswanth:Haswanth%40875@cluster0.f6z0vdx.mongodb.net/?appName=Cluster0/test")
    .then(() => {
      console.log("mongodb connected sucessfully");
    })
}

module.exports = connectToDB;