import React, { useState } from 'react'
import Accordion from './Accordion'
import FormHandling from './FormHandling'

const App = () => {
  const list = ["Home", "About", "Contact", "Help"]
  const [hamburg, setHamburg] = useState(true)
  return (
    <>
      {/* hamburger menu */}
      {/* <div className='px-4 pt-2'
        onClick={() => {
          if (hamburg == true) {
            setHamburg(false)
          } else {
            setHamburg(true)
          }
        }}
      >
        <i className="ri-menu-line text-3xl"></i>
      </div>
      {
        hamburg == true ?  <Accordion list={list} />  : ""
      } */}

      {/* Form Handiling */}
      <FormHandling />
    </>
  )
}

export default App
