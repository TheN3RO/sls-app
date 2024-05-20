import { Player, Team } from "@/types/team";
import { copyFileSync } from "fs";

function generateMeetingCombinations(teams: Team[]): [Team, Team][][] {
    const meetings: [Team, Team][][] = [];

    for (let i = 0; i < teams.length-1; i++) {
        const roundMeetings: [Team, Team][] = [];
        let teamHalf = teams.slice(0, teams.length / 2);
        let teamSecondHalf = teams.slice(teams.length / 2, teams.length);

        if (i > teamHalf.length-1) {
            const halfLength = Math.floor(teamHalf.length / 2);
            const firstHalfFirstArray = teamHalf.slice(0, halfLength);
            const secondHalfFirstArray = i % 2 === 0 ? teamHalf.slice(halfLength) : teamHalf.slice(halfLength).reverse();
            const firstHalfSecondArray = i % 2 === 0 ? teamSecondHalf.slice(0, halfLength) : teamSecondHalf.slice(0, halfLength).reverse();
            const secondHalfSecondArray = teamSecondHalf.slice(halfLength);

            let reshuffledHalfTeam = [...firstHalfFirstArray, ...secondHalfSecondArray];
            let reshuffledSecondHalfTeam = [...firstHalfSecondArray, ...secondHalfFirstArray];

            for (let j = 0; j < teamSecondHalf.length; j++) {
                if (i === teams.length-1) {
                    if (j < teamHalf.length) {
                        roundMeetings.push([reshuffledHalfTeam[j], reshuffledHalfTeam[teamHalf.length-1-j]]);
                        roundMeetings.push([reshuffledSecondHalfTeam[j], reshuffledSecondHalfTeam[teamHalf.length-1-j]]);
                    }
                } else {
                    roundMeetings.push([reshuffledHalfTeam[j], reshuffledSecondHalfTeam[teamHalf.length-1-j]]);
                    console.log((reshuffledHalfTeam[j].index+1)+" - "+(reshuffledSecondHalfTeam[teamHalf.length-1-j].index+1))
                }
            }
            console.log(reshuffledHalfTeam.map((team) => team.index+1))
            console.log(reshuffledSecondHalfTeam.map((team) => team.index+1))
            console.log("----")
        } else {
            teamSecondHalf = moveBy(teamSecondHalf, i);
            for (let j = 0; j < teamHalf.length; j++) {
                roundMeetings.push([teamHalf[j], teamSecondHalf[(teamHalf.length-1-j)]]);
            }    
        }
        meetings.push(roundMeetings);
    }

    return meetings;

    function moveBy(array: Team[], positions: number): Team[] {
        const newArray = [...array];
        for(let i = 0; i < positions; i++) {
            const last = newArray.pop() as Team; // Add type assertion here
            newArray.unshift(last);
        }
        return newArray;
    }
}

function generateMatchCombinations(matchedTeams: [Team, Team][][], meeting: number): [Player, Player][][] {
    const matches: [Player, Player][][] = []

    for (let i = 0; i < matchedTeams.length; i++) {
        const roundMatches: [Player, Player][] = [];
        for (const [teamA, teamB] of matchedTeams[i]) {
            for (let j = 0; j < 4; j++) {
                roundMatches.push([teamA.team[j], teamB.team[j+1 > 3 ? 0 : j+1 ]]);
            }
        }

        matches.push(roundMatches);
    }

    return matches;
}

function shuffleOrder(meetings: [Team, Team][]): [Team, Team][] {
    for (let i = meetings.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [meetings[i], meetings[j]] = [meetings[j], meetings[i]];
    }
    return meetings;
}

export function assignMatchesForRound(teams: Team[], meeting: number): [Player, Player][][] {

    const meetingCombinations = generateMeetingCombinations(teams);
    // for (const meeting of meetingCombinations) {
    //     for (const match of meeting) {
    //         console.log((match[0].index+1)+" - "+(match[1].index+1))
    //         // for (const [teamA, teamB] of match) {
    //         //     console.log(teamA.matchA, teamB.matchB);
    //         // }
    //     }     
    //     console.log("----")
    // }
    const matchCombinations = generateMatchCombinations(meetingCombinations, meeting);

    return matchCombinations;
}

