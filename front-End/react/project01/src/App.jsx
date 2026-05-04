import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  return (
    <div className='flex flex-col' >
      <Navbar />
      <Home />
    </div>
  )
}

export default App
