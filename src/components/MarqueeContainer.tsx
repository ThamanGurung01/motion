import React from 'react'
import Marquee from './ui/Marquee'

const MarqueeContainer = () => {
  return (
    <div className="w-full overflow-hidden bg-[#F37123] hover:bg-[#F58D4D] min-h-10 cursor-pointer group">
      <a href="#" className="w-full h-full grid lg:grid-cols-[0.2fr_1fr_0.2fr] place-items-center relative z-30">
        <div className="z-10 w-full h-full bg-[#F37123] hidden lg:flex items-center justify-center group-hover:bg-[#F58D4D]"></div>
        <div className="relative overflow-hidden w-full h-full flex items-center">
        <Marquee/>
        </div>
        <div className="z-10 w-full h-full bg-[#F37123] hidden lg:flex items-center justify-center group-hover:bg-[#F58D4D]"></div>
        </a>
    </div>
  )
}

export default MarqueeContainer