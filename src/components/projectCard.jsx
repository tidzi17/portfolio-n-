import { FaGithubSquare } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";



export default function ProjectCard({ id, title, date, image, imageID, description, techFirst, techSecond, codeurl, liveurl    }){
    const isScrollableImage = imageID !== "weather-app" && imageID !== "old-portfolio";
    return(
        <div className="w-full h-[230px] border-[1px] border-black rounded-3xl p-4 flex flex-row gap-3 justify-between">
               {isScrollableImage ? (
               <div className="w-1/2 h-full bg-black rounded-3xl overflow-hidden cursor-pointer">
                   <Link to={liveurl} target="blank"><img src={image} alt="" className="grayscale w-full h-auto transform translate-x-0 transition duration-[10s] ease-in-out hover:-translate-y-[1300px] " /></Link>
                </div>
                
            ) : (
                 <div className="w-1/2 h-full bg-black rounded-3xl relative">
                  <Link to={liveurl} target="blank"><img src={image} alt="" className="absolute inset-0 w-full h-full object-cover  rounded-3xl grayscale" /></Link>
                </div>
            )}
            <div className="w-1/2 flex flex-col items-center text-center">
                <h4 className="font-bold">{title}</h4>
                <p className="text-sm mt-1">{description}</p>
                <p className="text-base mt-1">Stack: <span>{techFirst}</span> <span>{techSecond}</span></p>
                <div className="flex gap-5 mt-auto">
                    <div className="flex items-center">
                       <a href={codeurl} target="blank"><FaGithubSquare className="text-3xl transform ease-in duration-300 hover:scale-110"/></a> 
                        <p className="text-lg">code</p>
                    </div>
                    <div className="flex items-center">
                        <a href={liveurl} target="blank"><RiExternalLinkLine  className="text-3xl transform ease-in duration-300 hover:scale-110"/></a>
                        <p className="text-lg">preview</p>
                    </div>
                </div>
            </div>
        </div>
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