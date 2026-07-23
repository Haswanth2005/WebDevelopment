
const express = require("express")
const noteModel = require("./model/notes.model")

const app = express()

app.use(express.json())

app.post('/notes', async (req,res)=>{
  const {title, description, code} = req.body

  const note = await noteModel.create({
    title: title,
    description: description,
    code: code
  })

  res.status(201).json({
    messsage: "note created sucessfully",
    note
  })
})

module.exports = app