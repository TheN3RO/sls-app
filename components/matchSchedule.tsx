import React from 'react';
import MatchScheduleTable from './matchScheduleTable';
import { groups, assignMatchesForRound } from '../utils/matchEngine'; // Import your data and functions

const MatchSchedule: React.FC = () => {
    const meetings = 4;
    let allMatches: [Player, Player][][] = [];

    for (let i = 0; i < meetings; i++) {
        const roundMatches = assignMatchesForRound(groups);
        allMatches = allMatches.concat(roundMatches);
    }

    return (
        <div>
            {allMatches.map((roundMatches, index) => (
                <div key={`meeting-${index}`}>
                    <h2>Meeting {index + 1}</h2>
                    <MatchScheduleTable roundMatches={roundMatches} />
                </div>
            ))}
        </div>
    );
};

export default MatchSchedule;
