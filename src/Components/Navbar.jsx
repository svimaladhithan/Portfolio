import React from 'react';
import logo from '../Assets/Projects/Logo.png';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <img width={200} src={logo} alt="logo" />

            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <button><a href='https://www.linkedin.com/in/vimaladhithan-s/' target='_blank'><FaLinkedin /></a></button>
                <button><a href='https://github.com/svimaladhithan' target='_blank'><FaGithub /></a></button>
                <button><a href='https://www.instagram.com/vimaladhithan_s/' target='_blank'><FaInstagram /></a></button>
            </div>
        </nav>
    );
};

export default Navbar;