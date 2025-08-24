import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen overflow-x-hidden min-h-12 grid grid-cols-[0.7fr_1fr] gap-[25rem] backdrop-blur-2xl bg-black place-items-center text-white text-lg'>
    <h1 className='font-bold italic text-xl'><a href="/">Navbar</a></h1>
    <nav className='w-3/5'>
    <ul className='font-normal flex items-center justify-around'>
        <li className='font-bold'><a href="#">Home</a></li>
        <li><a href="#">iCaur 03</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">News & Events</a></li>
    </ul>
    </nav>
    </div>
  )
}

export default Navbar