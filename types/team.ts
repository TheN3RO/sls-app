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
    schoolId: Object;
    index: number;
    shortName: string;
    moderator: string;
    mainPlayers: Player[];
    reservePlayers: Player[];
}