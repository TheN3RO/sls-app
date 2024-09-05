import { ObjectId } from "mongodb";
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

export interface ISchool {
    _id: ObjectId;
    name: string;
    short: string;
    address: string;
    image: string;
    createdAt: Date;
}

export interface IUser {
    _id: ObjectId;
    _teamId: ObjectId | undefined;
    email: string;
    name: string;
    role: 'competitor' | 'moderator' | 'admin';
    teamRole: 'main' | 'sub' | undefined;
    school: string | undefined;
    isReRegistered: boolean;
    password: string;
    points: number | 0;
    games: number | 0;
    wins: number | 0;
    loses: number | 0;
    createdAt: Date;
}

export interface ITeam {
    _id: ObjectId;
    _schoolId: ObjectId | undefined;
    index: number;
    shortName: string;
}