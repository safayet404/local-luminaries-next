"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled,setScrolled] = useState(false)

    useEffect(()=>{
        function handleScroll(){
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll",handleScroll)

        return () => {
            window.removeEventListener("scroll",handleScroll)
        }
    },[])

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    return (
        <div
            className={`fixed top-0  left-0 right-0 ${scrolled ? "bg-sky-800" : "bg-transparent"}  z-50`}
        >
            <div
                className="navbar container mx-auto flex justify-between items-center px-4 py-7"
            >

                <div>Local Luminaries</div>

                <button onClick={toggleMenu} className='lg:hidden btn'>
                    {isMenuOpen ? '✖' : '☰'}
                </button>

                <div className='hidden lg:flex'>
                    <ul className='flex space-x-10 font-medium uppercase'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Tours</li>
                        <li>Team</li>
                        <li>Contact</li>         </ul>
                </div>

                <div className='hidden lg:flex'>
                    <Link href="/profile">Profile</Link>
                </div>

            </div>

            {isMenuOpen && (
                <div className="lg:hidden fixed top-16 right-4 bg-white w-64 p-4 rounded-lg shadow-lg z-40 animate-slide-in">
                    <ul className="space-y-4 text-left text-[#1F2224]">
                        <li><Link href="/">Home</Link></li>


                        <li><Link href="/case">Case Studies</Link></li>


                        <li><Link href="/resources">Resources</Link></li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar
