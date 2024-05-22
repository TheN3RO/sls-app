"use client";

import { CustomButtonPops } from '@/types';

const CustomButton = ({title, btnType, containerStyles, handleClick}: CustomButtonPops) => {
  return (
    <button disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}>
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton