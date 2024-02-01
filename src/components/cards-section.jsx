import React from "react";
import ProjectCard from "./projectCard";
import data from '../data/projects.json';

export default function CardsSection() {
 

  return (
    <div id="cardssection" className="w-full relative">
      <div className="w-full flex flex-col lg:flex-row gap-7 justify-between py-20">
        <div className="flex flex-col items-center gap-10 lg:gap-40">
        {data.projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
        </div>
        <div className="hidden lg:flex relative w-[2px] bg-black">
        </div>
        <div className="flex flex-col items-center gap-10 lg:gap-40 lg:mt-32">
        {data.projects.slice(3, 5).map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
        </div>
      </div>
      <p className="text-4xl">new projects coming soon</p>
    </div>
  );
}
