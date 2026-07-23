const app = require("./src/app.js")
const connectToDb = require("./src/config/database.js")

const dns = require('dns');
dns.setServers(['8.8.8.8']);

require("dotenv").config()

connectToDb()


app.listen(3000, () => {
  console.log("server started");

})