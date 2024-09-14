import React from 'react';
import {motion} from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Resume from "../Assets/Projects/Vimaladhithan_Resume.pdf"

const Contact = ({contact}) => {
    return (
        <div className='border-b border-neutral-900 pb-20'>
            <motion.h1
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:0.5}}
            className='my-10 text-center text-3xl'>Contact
            </motion.h1>
            <div className='text-center tracking-tighter'>
                <motion.p 
                 whileInView={{opacity:1, x:0}}
                 initial={{opacity:0, x:-100}}
                 transition={{duration:1}}
                className='my-4'>{contact.address}</motion.p>
                <motion.div 
                 whileInView={{opacity:1, x:0}}
                 initial={{opacity:0, x:100}}
                 transition={{duration:1}}
                className='flex justify-center'><FaPhoneSquareAlt className='mt-5 mr-2'/>
                <p 
                className='my-4'>{contact.phoneNo}</p></motion.div>
                <div className='flex justify-center'><FaPaperPlane className='mr-2 mt-2 size-3'/>
                <a href='#' className='border-b'>{contact.email}</a></div>

            </div>
            <div>
                <button><a href={Resume} download>Download Resume</a></button>
            </div>
        </div>
    );
};

export default Contact;