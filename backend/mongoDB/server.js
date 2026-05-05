//server.js has also two things
// -start the server and connect to database

const app = require('./src/app.js');
const connectToDb = require('./src/config/database.js');

connectToDb();

app.listen(3000,() => {
  console.log("server has started");
})
