import React from "react";
import CardsSection from "../components/cards-section";



export default function Portfolio(){

  
    return(
        <div id="portfolio" className="w-full  border-t-[1px]  border-b-[1px] border-black relative">
              <div className="absolute bottom-10 left-5 right-0 ">
        <p className="text-9xl font-bold text-black opacity-5">[2]</p>
      </div>
      <div className="w-full px-6 xl:px-28  py-28 ">
      <div>
            <div className="w-[120px] h-[2px] bg-black mb-4"></div>
            <h3 className="text-black text-2xl md:text-4xl">personal projects</h3>
            <p className="lg:w-1/2 mt-2 text-base md:text-xl">Here, you'll find a collection of personal projects that represent my journey as a front-end developer. From concept to execution, each project demonstrates my commitment to craftsmanship and creativity.</p>
        </div>
        <div><CardsSection /></div>
    
      </div>
        </div>
    )
}