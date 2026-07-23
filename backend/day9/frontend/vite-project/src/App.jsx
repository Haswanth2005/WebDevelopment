import React from 'react'
import './App.css'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const App = () => {

  const [notes, setnotes] = useState([])

  const fetchNotes = () => {
    axios.get("http://localhost:3000/api/notes")
      .then(res => {
        setnotes(res.data.notes)

    })
  }

  useEffect(() => {
    fetchNotes()
  }, [setnotes])

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    addNotes()

    setTitle("")
    setDescription("")
  }

  const addNotes = () => {
    axios.post("http://localhost:3000/api/notes", {
      title: title,
      description: description
    }).then((res) => {
      fetchNotes()
    })
  }

  return (
    <div className='box'>

      <div className="addNotes">
        <form onSubmit={(e)=>{handleSubmit(e)}}>
          <input type="text" name='title' placeholder='Title'
            onChange={(e)=>{setTitle(e.target.value)}}
          />
          <input type="text" name='description' placeholder='Description'
            onChange={(e)=>{setDescription(e.target.value)}}
          />
          <button type='submit'>Add Notes</button>
        </form>
      </div>

      {
        notes.map((note) => {
          return <div className="note"
                    key={note._id}  >
                    <div className="title">{note.title}</div>
                    <div className="description">{note.description}</div>
                </div>
        })
      }

    </div>
  )
}

export default App
