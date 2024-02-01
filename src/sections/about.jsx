import React from "react"
import htmlicon from '../assets/icons/html.png';
import cssicon from '../assets/icons/css.png';
import jsicon from '../assets/icons/js.png';
import reacticon from '../assets/icons/react.png';
import tailwindicon from '../assets/icons/tailw.png';
import scssicon from '../assets/icons/sass.png';
import { HashLink as Link } from "react-router-hash-link";
import 'font-awesome/css/font-awesome.min.css';



export default function About(){

    const stack = [ htmlicon, cssicon, jsicon, reacticon, tailwindicon, scssicon ]

    return(
        <div id="about" className="w-full   relative">
              <div className="absolute bottom-10 left-5 right-0 ">
        <p className="text-9xl font-bold text-black opacity-5">[1]</p>
      </div>
      <div className="px-6 xl:px-28 py-28">
        <div>
            <div className="w-[80px] md:w-[120px] h-[2px] bg-black mb-4"></div>
            <h3 className="text-black text-2xl md:text-4xl">a little bit about me</h3>
        </div>
        <div className="flex flex-col lg:flex-row  justify-between py-5 xl:p-20 h-auto ">
            <div className="w-full lg:w-2/3 relative mb-7 lg:mb-0">
                <p className="text-base md:text-xl">Hello there! I'm Tijana, a front-end developer with a passion for React and an 
                occasional flair for design. When I'm not busy crafting 
                pixel-perfect user interfaces, you'll likely find me cozying up to 
                a cup of coffee with a keyboard under
                 my fingertips. I'm all about that 'never-stop-learning' life, and 
                 I thrive on the constant evolution of web technologies. Rainy days 
                 are my secret source of creativity - there's something magical about 
                 the pitter-patter that sparks my coding mojo. While I may not be 
                 a professional designer, I've got a knack for crafting the visual charm of my projects. I love bringing design concepts to life and making them interactive web experiences.  Whether I'm transforming
                  ideas into code or debugging, I'm always 
                  up for a coding challenge and an extra shot of espresso. 
                  Let's bring some frontend magic to your project together!</p>
                <div className="flex gap-3 mt-6 md:mt-16 ">
                   <Link to="#portfolio" smooth><button className="px-5 md:px-7 py-2 bg-secondaryGrey text-white border-[1px] border-black rounded-3xl text-sm cursor-pointer transform duration-200 ease-in hover:bg-whitebgsec   hover:text-black">portfolio.</button></Link> 
                    <button  className="px-5 md:px-7 py-2 cursor-not-allowed bg-secondaryGrey text-white border-[1px] border-black rounded-3xl text-sm  transform duration-200 ease-in hover:bg-whitebgsec   hover:text-black">download CV.</button>
                </div>
            </div>
            <div className=" ">
                <h3 className=" text-black text-2xl md:text-4xl">tech stack:</h3>
                <div className="grid grid-cols-3 grid-rows-2 gap-10 w-fit mt-7">
                {stack.map((icon, index) => (
                    <img key={index} src={icon} alt={`Icon ${index}`} className="w-[48px] md:w-[64px] transform duration-200 ease-in hover:scale-105"/>
                ))}
                </div>
            </div>
        </div>
      </div>
      
        </div>
    )
}