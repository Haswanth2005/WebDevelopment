import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around m-4'>
      <div className='font-bold text-3xl '>
        Travel
      </div>

      <div className='flex gap-6 p-3 font-normal'>
        <p>ABOUT</p>
        <p>TOUR</p>
        <p>PACKAGE</p>
        <p>CONTACT</p>
      </div>

      <div className='bg-black text-white p-3 px-9 rounded-4xl'>
        Book Trip
      </div>
    </div>
  )
}

export default Navbar
