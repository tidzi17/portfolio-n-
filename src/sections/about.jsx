import React from "react"
import htmlicon from '../assets/icons/html.png';
import cssicon from '../assets/icons/css.png';
import jsicon from '../assets/icons/js.png';
import reacticon from '../assets/icons/react.png';
import tailwindicon from '../assets/icons/tailw.png';
import scssicon from '../assets/icons/sass.png';
import { HashLink as Link } from "react-router-hash-link";


export default function About(){

    const stack = [ htmlicon, cssicon, jsicon, reacticon, tailwindicon, scssicon ]

    return(
        <div id="about" className="w-full   relative">
              <div className="absolute bottom-10 left-5 right-0 ">
        <p className="text-9xl font-bold text-black opacity-5">[1]</p>
      </div>
      <div className="lg:px-28 py-28">
        <div>
            <div className="w-[120px] h-[2px] bg-black mb-4"></div>
            <h3 className="text-black text-4xl">a little bit about me</h3>
        </div>
        <div className="flex  justify-around p-20 h-auto ">
            <div className="w-1/2 relative">
                <p className="text-xl">Hi there! My name is Tijana, and as i said I am a Frontend Developer. A passionate Frontend developer and web design enthusiast with an insatiable curiosity for all things web-related. As a creative mind and avid learner, I'm constantly exploring new technologies and design trends to craft immersive and user-centric digital experiences.A passionate Frontend developer and web design enthusiast with an insatiable curiosity for all things web-related. As a creative mind and avid learner, I'm constantly exploring new technologies and design trends to craft immersive and user-centric digital experiences.</p>
                <div className="flex gap-3 mt-16 ">
                   <Link to="#portfolio" smooth><button className="px-7 py-2 bg-secondaryGrey text-white border-[1px] border-black rounded-3xl text-sm cursor-pointer transform duration-200 ease-in hover:bg-whitebgsec   hover:text-black">portfolio.</button></Link> 
                    <button className="px-7 py-2 bg-secondaryGrey text-white border-[1px] border-black rounded-3xl text-sm cursor-pointer transform duration-200 ease-in hover:bg-whitebgsec   hover:text-black">download CV.</button>
                </div>
            </div>
            <div className=" ">
                <h3 className=" text-black text-4xl">tech stack:</h3>
                <div className="grid grid-cols-3 grid-rows-2 gap-10 w-fit mt-7">
                {stack.map((icon, index) => (
                    <img key={index} src={icon} alt={`Icon ${index}`} className="w-[64px] transform duration-200 ease-in hover:scale-105"/>
                ))}
                </div>
            </div>
        </div>
      </div>
      
        </div>
    )
}