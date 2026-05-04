import React, { useState } from 'react'

const FormHandling = () => {

  const [text, setText] = useState("")

  let onSubmit = (e) => {
    e.preventDefault()
    console.log(text);
  }

  return (
    <div className='p-4 '>
      <form action="" className='flex gap-2'
        onSubmit={onSubmit}
      >
        <input className='bg-gray-400 rounded-xl p-1 px-3'
          type="text" placeholder='write anything'
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
        <button type='submit'
          className='bg-gray-400 rounded-xl p-1 px-4 '>
          submit
        </button>
      </form>
    </div>
  )
}

export default FormHandling
