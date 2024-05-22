import { meetingCombinations } from "@/constants";
import { Player, Team } from "@/types/team";

function generateMeetingCombinations(teams: Team[]): [Team, Team][][] {
    const meetings: [Team, Team][][] = [];

    for (let i = 0; i < teams.length-1; i++) {
        const roundMeetings: [Team, Team][] = [];
        let teamHalf = teams.slice(0, teams.length / 2);
        let teamSecondHalf = teams.slice(teams.length / 2, teams.length);

        if (i > teamHalf.length-1) {
            const firstHalfKey = teamHalf.slice(0, 1);
            const secondHalfKey = teamSecondHalf.slice(0, 1);
            const firstHalfValues = moveBy(teamHalf.slice(1), i-teamHalf.length);
            const secondHalfValues = moveBy(teamSecondHalf.slice(1), i-teamHalf.length);

            const resheduledFirstHalf = [...firstHalfKey, ...firstHalfValues];
            const resheduledSecondHalf = [...secondHalfKey, ...secondHalfValues];


            // FIXME: NIE OBEJMUJE SYTUACJI Z NIEPARZYSTĄ ILOŚCIĄ DOPASOWANYCH DRUŻYN
            for (let j = 0; j < resheduledFirstHalf.length; j+=2) {
                roundMeetings.push([resheduledFirstHalf[j], resheduledFirstHalf[j+1]]);
                roundMeetings.push([resheduledSecondHalf[j], resheduledSecondHalf[j+1]]);
            }
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
                roundMatches.push([teamA.team[j], teamB.team[(j+meeting) % 4]]);
            }
        }

        matches.push(roundMatches);
    }

    return matches;
}

function loadMeetingCombinations(combinations: [number, number][][], teams: Team[]): [Team, Team][][] {
    const meetingMatches: [Team, Team][][] = [];

    for (let round of combinations) {
        const roundMatches: [Team, Team][] = [];
        for (let match of round) {
            // Subtract 1 from match[0] and match[1] because array indices start from 0
            roundMatches.push([teams[match[0] - 1], teams[match[1] - 1]]);
        }
        meetingMatches.push(roundMatches);
    }

    return meetingMatches;
}

function shuffleOrder(meetings: [Team, Team][]): [Team, Team][] {
    for (let i = meetings.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [meetings[i], meetings[j]] = [meetings[j], meetings[i]];
    }
    return meetings;
}

export function assignMatchesForRound(teams: Team[], meetingsNum: number): [Player, Player][][] {

    const meeting = loadMeetingCombinations(meetingCombinations, teams);
    const matchCombinations = generateMatchCombinations(meeting, meetingsNum);

    return matchCombinations;
}
