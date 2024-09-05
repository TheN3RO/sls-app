import { Key } from "react";

export interface SlotPlayer {
    id: string;
    name: string;
    role?: 'moderator' | 'main' | 'sub' | undefined;
}