import { Player } from '@/types/team';
import React from 'react'

interface Props {
  roundMatches: [Player, Player][][]
}

const MatchScheduleTable: React.FC<Props> = ({roundMatches}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Round</th>
                    <th>Match</th>
                    <th>Players</th>
                </tr>
            </thead>
            <tbody>
                {roundMatches.map((matches, roundIndex) => (
                    matches.map((match, matchIndex) => (
                        <tr key={`round-${roundIndex}-match-${matchIndex}`}>
                            {matchIndex === 0 && <td rowSpan={matches.length}>{roundIndex + 1}</td>}
                            <td>{matchIndex + 1}</td>
                            <td>{`${match[0].name} ${match[0].surname} vs ${match[1].name} ${match[1].surname}`}</td>
                        </tr>
                    ))
                ))}
            </tbody>
        </table>
    );
}

export default MatchScheduleTable