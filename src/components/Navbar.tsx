import React from 'react'

const Navbar = () => {
  return (
    <div className='border w-full min-h-14 grid grid-cols-[0.5fr_1fr] place-items-center'>
    <h1>Navbar</h1>
    <ul className='flex'>
        <li>Home</li>
        <li>iCaur 03</li>
        <li>Contact us</li>
        <li>News & Events</li>
    </ul>
    </div>
  )
}

export default Navbar