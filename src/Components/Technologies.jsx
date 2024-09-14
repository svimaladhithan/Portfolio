import React from 'react';
import { RiNodejsFill, RiReactjsLine } from 'react-icons/ri';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { animate, motion } from "framer-motion"

const icon=(duration)=>({
    initial: {y: -10},
    animate: {
        y: [10,-10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})
const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h1>
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5}}className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div 
                variants={icon(2.5)} initial="initial" animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-5xl text-green-500'/>
                </motion.div>
                <motion.div 
                variants={icon(3)} initial="initial" animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiExpress className='text-5xl'/>
                </motion.div>
                <motion.div 
                variants={icon(3.5)} initial="initial" animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-5xl text-cyan-400'/>
                </motion.div>
                <motion.div 
                variants={icon(4)} initial="initial" animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiNodejsFill className='text-5xl text-green-500'/>
                </motion.div>
               
            </motion.div>
        </div>
    );
};

export default Technologies;