// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { wrap } from "popmotion";
// const images = [
//   "/17.png",
//   "/blogDefaultCover.jpg",
//   "/night.jpg",
//   "/web.jpg",
// ];
// const variants = {
//   enter: (direction: number) => {
//     return {
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0
//     };
//   },
//   center: {
//     x: 0,
//     opacity: 1
//   },
//   exit: (direction: number) => {
//     return {
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0
//     };
//   }
// };
// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset: number, velocity: number) => {
//   return Math.abs(offset) * velocity;
// };

// const Carousel = () => {
//   const [[page, direction], setPage] = useState([0, 0]);
//   const imageIndex = wrap(0, images.length, page);

//   const paginate = (newDirection: number) => {
//     setPage([page + newDirection, newDirection]);
//   };

//   return (
//     <>
//         <AnimatePresence initial={false} custom={direction}>
//         <motion.img
//           className="w-full h-full mx-auto overflow-hidden select-none"
//           key={page}
//           src={images[imageIndex]}
//           custom={direction}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: "spring", stiffness: 300, damping: 30 },
//             opacity: { duration: 0.2 }
//           }}
//           drag="x"
//           dragConstraints={{ left: 0, right: 0 }}
//           dragElastic={1}
//           onDragEnd={(e, { offset, velocity }) => {
//             const swipe = swipePower(offset.x, velocity.x);

//             if (swipe < -swipeConfidenceThreshold) {
//               paginate(1);
//             } else if (swipe > swipeConfidenceThreshold) {
//               paginate(-1);
//             }
//           }}
//         />
//       </AnimatePresence>

//       <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 z-10 flex gap-10 font-bold">
//         <button
//           onClick={() => paginate(-1)}
//           className="bg-black/50 text-white px-4 py-2 rounded"
//         >
//           <span>{'<---'}</span> <span>Prev</span>
//         </button>
//         <button
//           onClick={() => paginate(1)}
//           className="bg-black/50 text-white px-4 py-2 rounded"
//         >
//           <span>Next</span> <span>{'--->'}</span>
//         </button>
//       </div>
//     </>
//   );
// };

// export default Carousel;