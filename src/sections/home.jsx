import Button from "../components/button"
import { HashLink as Link } from "react-router-hash-link"
import SocialsIcons from "../components/socials"

export default function Home(){
    return(
        <div id="home" className="w-full h-[100vh] relative">
            <div className="transform translate-y-[30%] h-full flex flex-col absolute  md:ml-[10%]">
                <div className="">
                    <h1 className="text-8xl text-black">Hi There! I'm Tijana,</h1>
                    <h1 className="text-8xl font-bold text-primaryGrey">Front-end Developer.</h1>
                    <p className="text-xl text-black w-2/3">A passionate front-end developer and web design enthusiast with an insatiable curiosity for all things web-related. As a creative mind and avid learner, I am constantly exploring new technologies and design trends to craft immersive and user-centric digital experiences.</p>
                </div>
                <div className="mt-20">
                <Link  to="#portfolio" smooth><Button text="Check out my work"/></Link> 
                </div>
            </div>
            <div className="absolute bottom-10 left-5 right-0 ">
        <p className="text-9xl font-bold text-black opacity-5">[0]</p>
      </div>
      <div className="absolute bottom-10 right-20">
      <SocialsIcons />
      </div>
        </div>
    )
}