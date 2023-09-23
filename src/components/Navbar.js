import React, { useState } from 'react';
import { Link } from 'react-scroll';
import DarkModeToggle from '../components/DarkModeToggle';
import ScrollProgressBar from './ScrollProgressBar';

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    
    return (
        <>
            <nav className='fixed h-20 w-full z-10 top-0 left-0 bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 font-rajdhani overflow-none'>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5 self-center">
                    <Link className='text-md md:text-lg lg:text-2xl font-extrabold text-black dark:text-white cursor-pointer' to="home" smooth={true} duration={800}>ALEXANDER GARIN</Link>
                    <div className=" max-w-screen-xl flex flex-wrap items-center justify-between ">
                    <DarkModeToggle className=''/>
                        <ul className='hidden md:flex gap-8 cursor-pointer items-center font-semibold'>
                            <Link className='text-black dark:text-white md:text-lg' to="home" smooth={true} duration={800}>Home</Link>
                            <Link className='text-black dark:text-white md:text-lg' to="about" smooth={true} duration={800}>About</Link>
                            <Link className='text-black dark:text-white md:text-lg' to="contact" smooth={true} duration={800}>Contact</Link>
                        </ul>

                        <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden">
                            {isMenuOpen ? (
                            // SVG for Close Menu
                            <svg className="w-5 h-5 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            ) : (
                            // SVG for Open Menu
                            <svg className="w-5 h-5 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                            )}
                        </button>
                    </div>

                    <div className={`fixed top-20 left-0 w-full h-screen bg-white dark:bg-black transform transition-transform duration-300 ease-in-out overflow-y-auto ${isMenuOpen ? 'translate-x-0 ' : 'translate-x-full'}`}>
                        <ul className="flex flex-col gap-8 mt-5 cursor-pointer text-center font-semibold text-xl">
                            <Link className='text-black dark:text-white' to="home" smooth={true} duration={800} onClick={() => setIsMenuOpen(false)}>
                            Home
                            </Link>
                            <Link className='text-black dark:text-white' to="about" smooth={true} duration={800} onClick={() => setIsMenuOpen(false)}>
                            About
                            </Link>
                            <Link className='text-black dark:text-white' to="contact" smooth={true} duration={800} onClick={() => setIsMenuOpen(false)}>
                            Contact
                            </Link>
                        </ul>
                    </div>
                </div>
                <ScrollProgressBar />
            </nav>
        </>
    )
}
