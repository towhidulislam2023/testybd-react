import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, BeakerIcon, CursorArrowRaysIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
    const navigations = [
        { id: "1", label: "Home", link: "/" },
        { id: "2", label: "About", link: "/about" },
        { id: "3", label: "Food", link: "/food" },
        { id: "4", label: "Offer", link: "/offer" },
        { id: "5", label: "Login", link: "/login" }
    ];
    console.log(navOpen);

    return (
        <nav className='flex justify-between items-center  bg-indigo-500 py-4 md:px-32 px-5'>
            <h1 className='font-mono text-lg md:text-4xl text-yellow-400 font-extrabold shadow-2xl  md:border-2 md:border-blue-200 px-2 py-1 rounded-lg'>TestyBd</h1>

            <ul className={`md:flex gap-8 md:static duration-500   absolute ${navOpen ? "top-16 right-0" : "-top-96 right-0"}`}>
                {
                    navigations.map(navigation => <NavLink key={navigation.id} className={({ isActive }) => isActive ? "text-yellow-400 underline" : ""} to={navigation.link}><li className='text-sm md:text-xl font-bold bg-indigo-500 px-7 py-1 z-20  text-white' key={navigation.id}>{navigation.label}</li></NavLink>)
                }
            </ul>
            <div className='md:hidden cursor-pointer' onClick={() => setNavOpen(!navOpen)}>
                <span>
                    {
                        navOpen ? <XMarkIcon className="h-8 w-8 text-white-500" /> : <Bars3Icon className="h-8 w-8 text-white-500" />
                    }
                </span>
            </div>

        </nav>
    );
};

export default Header;