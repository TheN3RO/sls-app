import { Groups } from '@/constants';
import { Player } from '@/types/team';
import { assignMatchesForRound } from '@/utils/matchEngine';
import React from 'react'
import MatchScheduleTable from './matchScheduleTable';
import { Box } from '@chakra-ui/react';

const MatchSchedule = () => {
    const meetings = 4;
    let allMatches: [Player, Player][][][] = [];

    for (let i = 0; i < meetings; i++) {
        const roundMatches = assignMatchesForRound(Groups, i);
        allMatches.push(roundMatches); // Flatten the roundMatches array before pushing
    }

  return (
      <Box className='container mx-auto text-black'>
          {allMatches.map((meeting, index) => (
              <div className='w-100' key={`meeting-${index}`}>
                  <h1>Spotkanie {index + 1}</h1>
                  <MatchScheduleTable meetingMatches={[meeting]} />
              </div>
          ))}
      </Box>
  );
}

export default MatchSchedule