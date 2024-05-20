export interface Player {
    name: string;
    surname: string;
    class: number;
    age: number;
    email: string;
    points: number;
    games: number;
    wins: number;
    loses: number;
}

export interface Team {
    name: string;
    school: string;
    index: number;
    team: Player[];
}