import React from "react";
import Profile1 from "../Assets/Projects/Profile1.jpg";
import { motion } from "framer-motion"

const container= (delay)=>({
  hidden: {x: -100, opacity: 0},
  visible: {x:0, opacity: 1,
    transition: {duration: 0.5, delay: delay}
  }
})

const Main = ({ hero }) => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2 lg:pr-8 flex flex-col items-center lg:items-start">
          <motion.h1 variants={container(0)}
          initial="hidden"
          animate="visible"
          className="pb-4 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
            Vimaladhithan S
          </motion.h1>
          <motion.span 
          variants={container(0.5)}
          initial="hidden"
          animate="visible"className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
            Full Stack Developer
          </motion.span>
          <motion.p variants={container(1)}
          initial="hidden"
          animate="visible" className="mt-4 max-w-xl py-6 font-light tracking-tighter">
            {hero}
          </motion.p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:items-start">
          <motion.img width={250} initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1.2}} className="rounded-2xl mt-20" src={Profile1} alt="Vimal" />
        </div>
      </div>
    </div>
  );
};

export default Main;