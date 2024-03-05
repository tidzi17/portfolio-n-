import React from "react";
import ProjectCard from "./projectCard";
import data from '../data/projects.json';




export default function CardsSection() {
  const projectsMobile = data.projects.filter(project => [1, 2, 3, 4, 5].includes(project.id));
  const orderedProjects = projectsMobile.sort((a, b) => [1, 5, 2, 6, 3, 4].indexOf(a.id) - [1, 2, 3, 4, 5].indexOf(b.id));

 

  return (
    <div id="cardssection" className="w-full relative overflow-hidden">
      <div className="hidden  w-full lg:flex flex-col lg:flex-row gap-7 justify-between py-20">
        <div className="flex flex-col items-center gap-10 lg:gap-40">
        {data.projects.slice(0, 2 && 3, 5).map((project, index) => (
              <ProjectCard key={index} index={index} {...project} />
            ))}
        </div>
        <div className="hidden lg:flex relative w-[2px] bg-black">
        </div>
        <div className="flex flex-col items-center gap-10 lg:gap-40 lg:mt-32">
        {data.projects.slice(3, 5).map((project, index) => (
              <ProjectCard key={index} index={index} {...project} />
            ))}
        </div>
      </div>
     <div className="lg:hidden w-full  flex-col lg:flex-row gap-7 justify-between py-20">
        <div className="flex flex-col items-center gap-10 lg:gap-40">
        {orderedProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
        </div>
      </div>
      <p className="text-4xl">new projects coming soon</p>
    </div>
  );
}
