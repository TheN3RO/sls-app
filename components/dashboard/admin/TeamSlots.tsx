import { Avatar, Divider, List, ListItem, Skeleton } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable, DropResult } from '@hello-pangea/dnd'
import { SlotPlayer } from '@/types/team';
import MainSlot from './roleSlots/MainSlot';
import SubSlot from './roleSlots/SubSlot';
import { ITeam } from '@/types';

const fetchTeamPlayers = async (teamId: string) => {
  const response = await fetch(`/api/team-players?_teamId=${teamId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch team players');
  }
  return response.json();
};

interface TeamSlotsProps {
  selectedTeam?: ITeam;
}

const TeamSlots: React.FC<TeamSlotsProps> = ({ selectedTeam }) => {
  const [teamPlayers, setTeamPlayers] = useState<SlotPlayer[]>([]);
  const [loading, setLoading] = useState(true);

  const editPlayerRole = async (id: string, role: string | undefined) => {
    try {
      const response = await fetch(`/api/team-players`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...{ teamRole: role} }),
      });
      if(response.ok) {
        console.log('Player role updated successfully');
      }
    } catch (error) {
      console.error('Failed to update player role:', error);
    }
  }

  useEffect(() => {
    const loadTeamPlayers = async () => {
      try {
        const players = await fetchTeamPlayers(String(selectedTeam?._id));
        const slotPlayers: SlotPlayer[] = players.map((player: any) => ({
          id: player._id,
          name: player.name,
          role: player.teamRole,
        }));
        setTeamPlayers(slotPlayers);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadTeamPlayers();
  }, [selectedTeam]);

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

    editPlayerRole( movedPlayer.id, movedPlayer.role);
    updatedPlayers[source.index] = movedPlayer;
    setTeamPlayers(updatedPlayers);
  }

  const removePlayerRole = (playerId: string) => {
    const updatedPlayers = teamPlayers.map(player => 
      player.id === playerId ? { ...player, role: undefined } : player
    );
    editPlayerRole( playerId, undefined );
    setTeamPlayers(updatedPlayers);
  }

  if (loading) {
    return (
      <Skeleton height='200px' />
    );
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
            <span>Główni gracze</span>
            <MainSlot teamPlayers={teamPlayers} removePlayerRole={removePlayerRole} />
          </div>
          <div className='space-y-1'>
            <span>Rezerwowi gracze</span>
            <SubSlot teamPlayers={teamPlayers} removePlayerRole={removePlayerRole} />
          </div>
        </div>
      </DragDropContext>
    </div>
  )
}

export default TeamSlots