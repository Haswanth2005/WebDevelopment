const express = require('express')
const app = express()

app.use(express.json()) 

const arr =  []
app.post("/note", (req, res) => {
  arr.push(req.body)
  res.send("notes created")
})
app.get("/note", (req, res) => {
  res.send(arr)
})

app.listen(4000, () => {
  console.log('server is running..');
})