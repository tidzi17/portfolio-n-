
import React from 'react';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";


const Button = ({ text, textColor,  onClick }) => {
    return (
        <button className="cta flex items-center  justify-center" onClick={onClick}>
            <span className={`hover-underline-animation  text-2xl pr-3 ${textColor || 'text-black'}`}>
                {text}
            </span>
            <LiaLongArrowAltRightSolid
                size={24}
                className="transform translate-x-0 transition-transform ease-in-out duration-300"
                style={{ marginLeft: '5px', color: textColor || 'currentColor' }}
            />
        </button>
    );
};

export default Button;
