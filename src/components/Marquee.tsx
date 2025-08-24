"use client"
import React from "react"
import Marquee from "react-fast-marquee"

const Marquee2 = () => {
  return (
    <div className="w-full overflow-hidden bg-[#F37123] hover:bg-[#F58D4D] min-h-12 cursor-pointer grid grid-cols-full place-items-center">
      <a href="#" className="w-full h-full grid lg:grid-cols-[0.2fr_1fr_0.2fr] place-items-center">
        <div className="hidden lg:flex items-center justify-center"></div>
        <Marquee
        speed={100}
        pauseOnHover
        className="w-full h-full">
          <span className="font-bold">
            Expand with iCAUR: Explore Dealership Opportunities in Selected Regions!
          </span>
          <span className="ml-4 rounded-xl bg-black text-white font-bold px-2 py-1">
            Join us now!
          </span>
        </Marquee>
        <div className="hidden lg:flex items-center justify-center"></div>
      </a>
    </div>
  )
}

export default Marquee2
