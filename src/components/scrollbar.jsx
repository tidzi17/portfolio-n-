import React, { useEffect, useState } from "react";

export default function ScrollBar() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const section = document.getElementById("portfolio");
        const sectionHeight = section.clientHeight;
        const scrollY = window.scrollY;
        const newScrollPercentage = (scrollY / sectionHeight) * 100;
  
        const clampedScrollPercentage = Math.min(newScrollPercentage, 100);
  
        setScrollPercentage(clampedScrollPercentage);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
            <div className="relative w-[2px] bg-black">
              <div
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full"
                style={{ top: `${scrollPercentage}%` }}
              ></div>
            </div>
      );
    }