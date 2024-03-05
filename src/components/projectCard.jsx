import React  from "react";
import { FaGithubSquare } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: (index) => ({
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
    }),
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.4,
            duration: 0.5,
            ease: "easeInOut",
        }
    },
};



export default function ProjectCard({ id, title, date, image, imageID, description, techFirst, techSecond, codeurl, liveurl, index    }){
    const isScrollableImage = imageID !== "weather-app" && imageID !== "old-portfolio";

    return(
        <motion.div className="w-full h-[400px] md:h-[260px] border-[1px] border-black rounded-3xl p-4 flex flex-col md:flex-row gap-3 justify-between shadow-sm shadow-primaryGrey"
        variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={id}
              viewport={
                    {once: true} 
                  }>
               {isScrollableImage ? (
               <div className="w-full md:w-1/2 h-full bg-black rounded-3xl overflow-hidden cursor-pointer">
                   <Link to={liveurl} target="blank"><img src={image} alt=""  id="img" className="grayscale w-full h-auto transform translate-x-0 transition duration-[10s] ease-in-out hover:-translate-y-[1300px] "   /></Link>
                </div>
                
            ) : (
                 <div className="w-full md:w-1/2 h-full bg-black rounded-3xl relative">
                  <Link to={liveurl} target="blank"><img src={image} alt="" className="absolute inset-0 w-full h-full object-cover  rounded-3xl grayscale" /></Link>
                </div>
            )}
            <div className="w-full md:w-1/2 flex flex-col items-center text-center">
                <h4 className="font-bold">{title} {/* <span className="text-zinc-600">[{date}]</span> */}</h4>
                <p className="text-xs md:text-sm mt-1">{description}</p>
                <p className="text-base mt-1">Stack: <span>{techFirst}</span> <span>{techSecond}</span></p>
                <div className="flex gap-5 mt-auto">
                <a href={codeurl} target="blank"><div className="flex gap-2 items-center">
                      <FaGithubSquare className="text-3xl transform ease-in duration-300 hover:scale-110"/>
                        <p className="text-lg">code</p>
                    </div></a> 
                    <a href={liveurl} target="blank"> <div className="flex gap-2 items-center">
                        <RiExternalLinkLine  className="text-3xl transform ease-in duration-300 hover:scale-110"/>
                        <p className="text-lg">preview</p>
                    </div></a>
                </div>
            </div>
        </motion.div>
    )
}

ProjectCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageID: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techFirst: PropTypes.string.isRequired,
    techSecond: PropTypes.string.isRequired,
    codeurl: PropTypes.string.isRequired,
    liveurl: PropTypes.string.isRequired,
};