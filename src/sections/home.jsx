import Button from "../components/button"
import { HashLink as Link } from "react-router-hash-link"
import SocialsIcons from "../components/socials"
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        x: -100,
    },
    animate: (custom) =>( {
        opacity: 1,
        x: 0,
        transition: {
            delay: custom * 0.5,
            duration: 0.5,
            ease: "easeInOut",
          
        }
    }),
};


export default function Home(){
    return(
        <div id="home" className="w-full h-[100vh] relative overflow-hidden">
            <div
             className="transform translate-y-[20%] md:translate-y-[30%] h-full flex flex-col absolute px-6  xl:ml-[10%]"
            >
                <motion.div className=""
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={0}
                  viewport={
                    {once: true} 
                  }>
                    <h1 className="text-4xl md:text-5xl lg:text-8xl text-black">Hi There! I'm Tijana,</h1>
                    <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold text-primaryGrey">Front-end Developer.</h1>
                    <p className="text-base md:text-base lg:text-xl text-black mt-3 lg:w-2/3">A passionate front-end developer and web design enthusiast with an insatiable curiosity for all things web-related. As a creative mind and avid learner, I am constantly exploring new technologies and design trends to craft immersive and user-centric digital experiences.</p>
                </motion.div>
                <motion.div className="mt-10 md:mt-20"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={1}
                  viewport={
                    {once: true} 
                  }>
                <Link  to="#portfolio" smooth><Button text="Check out my work"/></Link> 
                </motion.div>
               
            </div>

            <div className="absolute bottom-10 left-5 right-0 w-fit">
        <p className="text-9xl font-bold text-black opacity-5">[0]</p>
      </div>
      <div className="absolute bottom-10 right-3 md:right-20">
      <SocialsIcons />
      </div>
        </div>
    )
}