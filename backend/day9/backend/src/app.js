const express = require("express")
const noteModel = require("./model/notes.model")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())



app.post("/api/notes", async (req, res) => {
  const { title, description } = req.body

  const notes = await noteModel.create({
    title: title,
    description: description
  })

  res.status(201).json({
    message: "notes created successfully",
    notes
  })
})

app.get("/api/notes", async (req, res) => {
  const notes = await noteModel.find()

  res.status(200).json({
    message: "notes fetched successfully",
    notes
  })
})

app.delete("/api/delete/:id", async (req, res) => {
  await noteModel.findByIdAndDelete(req.params.id)

  res.status(200).json({
    message: "note deleted successfully"
  })
})

app.patch("/api/update/:id", async (req, res) => {
    const { description } = req.body

    await noteModel.findByIdAndUpdate(req.params.id, { description })

    res.status(200).json({
        message: "Note updated successfully."
    })
})


module.exports = app