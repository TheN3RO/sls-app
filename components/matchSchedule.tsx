import { Groups } from '@/constants';
import { Player } from '@/types/team';
import { assignMatchesForRound } from '@/utils/matchEngine';
import React from 'react'
import MatchScheduleTable from './matchScheduleTable';

const MatchSchedule = () => {
  const meetings = 4;
  let allMatches: [Player, Player][][] = [];

  const roundMatches = assignMatchesForRound(Groups, 0);

  return (
      <div>
          {roundMatches.map((roundMatches, index) => (
              <div key={`meeting-${index}`}>
                  <h2>Spotkanie {index + 1}</h2>
                  <MatchScheduleTable roundMatches={[roundMatches]} />
              </div>
          ))}
      </div>
  );
}

export default MatchSchedule