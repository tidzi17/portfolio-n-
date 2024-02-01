import React, { useEffect } from 'react';


const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursor2 = document.querySelector(".cursor2");

    document.addEventListener("mousemove", (e) => {
      cursor.style.cssText = cursor2.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
    });

    return () => {
      document.removeEventListener("mousemove", (e) => {
        cursor.style.cssText = cursor2.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
      });
    };
  }, []);

  return (
    <>
      <div className="cursor z-50 fixed hidden lg:block w-28 h-28 border-[1px] border-black rounded-full left-0 top-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-400 ease-in-out"></div>
      <div className="cursor2 z-50 fixed hidden lg:block w-2 h-2 border-[1px] border-black bg-black rounded-full left-0 top-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2  "></div>
    </>
  );
};

export default CustomCursor;

