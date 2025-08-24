"use client"
import React from "react"
import { motion } from "framer-motion"

const Marquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-[#F37123] hover:bg-[#F58D4D] h-10 cursor-pointer group">
      <a href="#" className="w-full h-full grid lg:grid-cols-[0.2fr_1fr_0.2fr] place-items-center relative z-30">
        <div className="z-10 w-full h-full bg-[#F37123] hidden lg:flex items-center justify-center group-hover:bg-[#F58D4D]"></div>
        <div className="relative overflow-hidden w-full h-full flex items-center">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 5, ease: "linear", repeat: Infinity }}
            className="whitespace-nowrap will-change-transform flex">
            <span className="font-bold text-sm py-2">
              Expand with iCAUR: Explore Dealership Opportunities in Selected Regions!
            </span>
            <span className="ml-4 rounded-xl bg-black text-white px-2 py-1 font-bold text-sm">
              Join us now!
            </span>
          </motion.div>
        </div>
        <div className="z-10 w-full h-full bg-[#F37123] hidden lg:flex items-center justify-center group-hover:bg-[#F58D4D]"></div>
      </a>
    </div>
  )
}

export default Marquee
