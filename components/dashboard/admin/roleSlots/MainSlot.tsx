import { SlotPlayer } from '@/types/team'
import { Avatar, CloseButton } from '@chakra-ui/react'
import { Droppable } from '@hello-pangea/dnd'
import React from 'react'

interface MainSlotProps {
  teamPlayers: SlotPlayer[];
  removePlayerRole: (playerId: string) => void;
}

const MainSlot: React.FC<MainSlotProps> = ({teamPlayers, removePlayerRole}) => {
  return (
    <Droppable droppableId='mainPlayers'>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} 
          className='flex flex-wrap justify-center gap-3'
        >
          {Array.from({ length: 4 }).map((_, index) => {
            const player = teamPlayers.filter(player => player.role === 'main')[index];
            return (
              <div key={index} className='border border-neutral-800 rounded-lg p-3 w-64 h-20'>
                {player ? (
                  <div className='relative'>
                    <Avatar name={player.name} />
                    <span className='ml-4'>{player.name}</span>
                    <CloseButton 
                      className='absolute top-0 right-0'
                      onClick={() => removePlayerRole(player.id)}
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default MainSlot