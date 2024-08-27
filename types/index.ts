import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    btnType?: "button" | "submit"; 
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export type ChessModelProps = {
    stage: number;
    setStage: React.Dispatch<React.SetStateAction<number>>;
  };