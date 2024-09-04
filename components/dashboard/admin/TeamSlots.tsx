import { Avatar, Divider, List, ListItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable, DropResult } from '@hello-pangea/dnd'

interface Player {
  id: string;
  name: string;
  role?: 'moderator' | 'main' | 'sub' | undefined;
}

const initialPlayers: Player[] = [
  { id: '1', name: 'Kacper', role: undefined },
  { id: '2', name: 'Julka', role: undefined  },
  { id: '3', name: 'Maciej', role: undefined  },
  { id: '4', name: 'Krystian', role: undefined  },
  { id: '5', name: 'Miłosz', role: undefined  },
  { id: '6', name: 'Artur', role: undefined  },
  { id: '7', name: 'Wiktor', role: undefined  },
];

const TeamSlots = () => {
  const [teamPlayers, setTeamPlayers] = useState<Player[]>(initialPlayers);

  const handleOnDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const updatedPlayers = [...teamPlayers];
    const movedPlayer = { ...updatedPlayers[source.index] };

    switch (destination.droppableId) {
      case 'moderator':
        movedPlayer.role = 'moderator';
        break;
      case 'mainPlayers':
        movedPlayer.role = 'main';
        break;
      case 'subPlayers':
        movedPlayer.role = 'sub';
        break;
      default:
        movedPlayer.role = undefined;
    }

    console.log(movedPlayer, source.index, destination.droppableId);

    updatedPlayers[source.index] = movedPlayer;
    setTeamPlayers(updatedPlayers);
  }

  return (
    <div className='flex my-10'>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='players'>
          {(provided) => (
            <List spacing={3} className='min-w-64' 
              ref={provided.innerRef} 
              {...provided.droppableProps}
            >
              {teamPlayers.map((player, index) => {
                if (player.role) return null;
                return (
                  <Draggable key={player.id} draggableId={player.id.toString()} index={index}>
                    {(provided) => (
                      <ListItem className='border border-neutral-800 rounded-lg p-3 h-20' 
                        ref={provided.innerRef} 
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps}
                      >
                        <Avatar name={player.name} />
                        <span className='ml-4'>{player.name}</span>
                      </ListItem>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
        <Divider orientation='vertical' height="630px" borderColor="gray.400" className='mx-3'/>
        <div className='flex flex-col items-center justify-center flex-grow mx-5 gap-10'>
          <div className='space-y-1'>
            <span>Moderator</span>
            <Droppable droppableId='moderator'>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className='border border-neutral-800 rounded-lg p-3 w-64 h-20'>
                  {Array.from({ length: 1 }).map((_, index) => (
                    <div key={index} className='border border-neutral-800 rounded-lg p-3 w-64 h-20'>
                      {teamPlayers.filter(player => player.role === 'moderator')[index] ? (
                        <>
                          <Avatar name={teamPlayers.filter(player => player.role === 'moderator')[index].name} />
                          <span className='ml-4'>{teamPlayers.filter(player => player.role === 'moderator')[index].name}</span>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div className='space-y-1'>
            <span>Główni gracze</span>
            <Droppable droppableId='mainPlayers'>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className='flex flex-wrap justify-center gap-3'>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className='border border-neutral-800 rounded-lg p-3 w-64 h-20'>
                      {teamPlayers.filter(player => player.role === 'main')[index] ? (
                        <>
                          <Avatar name={teamPlayers.filter(player => player.role === 'main')[index].name} />
                          <span className='ml-4'>{teamPlayers.filter(player => player.role === 'main')[index].name}</span>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div className='space-y-1'>
            <span>Rezerwowi gracze</span>
            <Droppable droppableId='subPlayers'>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className='flex flex-wrap justify-center gap-3'>
                  {Array.from({ length: 2 }).map((_, index) => {
                    const player = teamPlayers.filter(player => player.role === 'sub')[index];
                    return (
                      <div key={index} className='border border-neutral-800 rounded-lg p-3 w-64 h-20'>
                        {player ? (
                          <Draggable draggableId={player.id} index={Number(player.id)}>
                            {(provided) => (
                              <div ref={provided.innerRef} 
                                {...provided.draggableProps} 
                                {...provided.dragHandleProps}
                              >
                                <Avatar name={player.name} />
                                <span className='ml-4'>{player.name}</span>
                              </div>
                            )}
                          </Draggable>
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
          </div>
        </div>
      </DragDropContext>
    </div>
  )
}

export default TeamSlots