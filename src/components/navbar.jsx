import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { IoCloseOutline } from "react-icons/io5";
import { FiMenu } from 'react-icons/fi'
import clsx from "clsx";

export default function Navbar(){
    const [isSideMenuOpen, setMenu] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          const position = window.pageYOffset;
          setScrollPosition(position);
        };
    
    window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      const border = scrollPosition > 600 ? 'black' : 'transparent';
      const bgColor = scrollPosition > 600 ? '#F6EEEE' : 'transparent';

    return(
        <div id="navbar" className="absolute">
            <nav style={{ borderBottom: '1px solid ' + border, backgroundColor: bgColor }} className="w-full fixed z-20 flex justify-between px-6 items-center py-3 xl:pb-3 xl:pt-5 xl:px-28">
            <div>
                <Link to='#home' smooth className="font-bold text-7xl">t.</Link>
              
            </div>
            <div className="">
            <div className="hidden md:flex gap-6 ">
            <Link to='#home' smooth className="text-black text-xl transform-all duration-300 ease-in hover:scale-105 hover:font-bold">[0].home</Link>
            <Link to='#about' smooth className="text-black text-xl transform-all duration-300 ease-in hover:scale-105 hover:font-bold">[1].about</Link>
            <Link to='#portfolio' smooth className="text-black text-xl transform-all duration-300 ease-in hover:scale-105 hover:font-bold">[2].portfolio</Link>
            <Link to='#contact' smooth className="text-black text-xl transform-all duration-300 ease-in hover:scale-105 hover:font-bold">[3].contact</Link>
            </div>
            <div><FiMenu onClick={() => setMenu(true)} className="text-4xl cursor-pointer flex text-black md:hidden"/></div>
            </div> 
           <div  onClick={() => setMenu(false)} className={
          clsx("fixed h-full transition-all w-screen -translate-x-full  bg-black/50 backdrop-blur-sm top-0 right-0 z-40",
          isSideMenuOpen ? 'translate-x-0' : 'translate-x-full')}>
             <div
            className="text-black bg-white ml-auto transition-all  flex flex-col absolute  w-56 lg:w-64  right-0 top-0 h-screen p-10 gap-10 z-50 ">
               <IoCloseOutline
                onClick={() => setMenu(false)}
                 className="mt-0 mb-8 text-4xl  cursor-pointer" />
                   <Link to='#home' smooth className="text-black text-xl font-bold">[0].home</Link>
                    <Link to='#about' smooth className="text-black text-xl font-bold">[1].about</Link>
                    <Link to='#portfolio' smooth className="text-black text-xl font-bold">[2].portfolio</Link>
                    <Link to='#contact' smooth className="text-black text-xl font-bold">[3].contact</Link>
             </div>
        </div>

            </nav>
        </div>
    )
}