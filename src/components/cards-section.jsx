import React, { useEffect, useState } from "react";
import ProjectCard from "./projectCard";

export default function CardsSection() {
 

  return (
    <div id="cardssection" className="w-full relative">
      <div className="w-full flex justify-between py-20">
        <div className="flex flex-col items-center gap-40">
          <ProjectCard />
          <ProjectCard />
          
        </div>
        <div className="relative w-[2px] bg-black">
        </div>
        <div className="flex flex-col items-center gap-40 mt-32">
          <ProjectCard />
        </div>
      </div>
      <p className="text-4xl">new projects coming soon</p>
    </div>
  );
}
