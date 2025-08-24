"use client"
import React from "react"
import { motion } from "framer-motion"

const Marquee: React.FC = () => {
  const boxVariants={
    hidden:{x: "75%"},
    visible:{x: "-100%"}
  }
  return (
          <motion.div
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 20, ease: "linear", repeat: Infinity , repeatType: "loop"}}
            className="whitespace-nowrap will-change-transform flex items-center text-sm">
            <span className="font-bold py-2">
              Expand with iCAUR: Explore Dealership Opportunities in Selected Regions!
            </span>
            <span className="ml-4 rounded-xl bg-black text-white px-2 py-1 font-bold">
              Join us now!
            </span>
            <span className="font-bold py-2 ml-[48rem]">
              Expand with iCAUR: Explore Dealership Opportunities in Selected Regions!
            </span>
            <span className="ml-4 rounded-xl bg-black text-white px-2 py-1 font-bold">
              Join us now!
            </span>
          </motion.div>
  )
}

export default Marquee
