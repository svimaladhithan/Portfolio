import React from 'react';
import logo from '../Assets/Projects/Logo.png';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {motion} from "framer-motion";

const Navbar = () => {
    return (
        <nav className='mb-20 flex flex-wrap items-center justify-between'>
            <div className='flex flex-shrink-0 items-center'>
                <img width={200} src={logo} alt="logo" />

            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <motion.button whileHover={{scale:1.2}} ><a href='https://www.linkedin.com/in/vimaladhithan-s/' target='_blank'><FaLinkedin /></a></motion.button>
                <motion.button whileHover={{scale:1.2}}><a href='https://github.com/svimaladhithan' target='_blank'><FaGithub /></a></motion.button>
                <motion.button whileHover={{scale:1.2}}><a href='https://www.instagram.com/vimaladhithan_s/' target='_blank'><FaInstagram /></a></motion.button>
            </div>
        </nav>
    );
};

export default Navbar;