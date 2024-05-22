import { MouseEventHandler } from "react";

export interface CustomButtonPops {
    title: string;
    btnType?: "button" | "submit"; 
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}