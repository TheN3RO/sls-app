"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ISchool } from '@/types';
import { Text, Button, Card, CardBody, CardFooter, Divider } from '@chakra-ui/react';
import TeamSlots from './TeamSlots';
import { ITeam } from '@/types';

const Teams = () => {
	const [ schools, setSchools ] = useState<ISchool[]>([]);
	const [ selectedTeam, setSelectedTeam ] = useState<ITeam>();

  const selectTeam = async (ID: string) => {
    const teams = await fetchTeams();
    setSelectedTeam(teams.find((team: ITeam) => String(team._schoolId) === ID));
  };

  const fetchTeamPlayers = async () => {
    const response = await fetch('/api/team-players');
    if (!response.ok) {
      throw new Error('Failed to fetch team players');
    }
    return response.json();
  };

  const fetchTeams = async () => {
		const response = await fetch('/api/teams');
		if (!response.ok) {
			throw new Error('Failed to fetch teams');
		}
		return response.json();
	};

  const fetchSchools = async () => {
		const response = await fetch('/api/schools');
		if (!response.ok) {
			throw new Error('Failed to fetch schools');
		}
		return response.json();
	};

	const loadSchools = async () => {
    try {
      const data = await fetchSchools();
      setSchools(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadSchools();
  }, []);

  return (
    <div className='relative'>
      <Image alt='dark background with light rectangles'  
        src="/background/light-dark-rect-bg.jpg" 
        width={1920} height={1080} 
        className='absolute top-0 left-0'
        objectFit='contain'/>
      <div className='relative z-10 bg-neutral-900/70 m-5 p-5 rounded-lg min-h-[800px]'>
        <div className='flex gap-10'>
          <h1 className='text-4xl font-bold text-neutral-100'>{selectedTeam ? (
           <>Drużyna - <span className='text-blue-600 font-bold'>{selectedTeam.shortName}</span></>
          ) : "Drużyny" }</h1>
          {selectedTeam ? (
            <Button variant='solid' colorScheme='blue' className='ml-auto'
              onClick={() => {setSelectedTeam(undefined)}}>
              Zamknij
            </Button>
          ) : null}
        </div>
        {selectedTeam ? (
          <TeamSlots selectedTeam={selectedTeam} />
        ) : (
          <div className='flex justify-start flex-wrap gap-5 mt-5'>
            {schools.map((school, index) => (
                <Card maxW='sm' key={index}>
                  <CardBody className='relative'>
                    <div className='min-h-[150px] flex justify-center items-center rounded-lg'>
                      <Image
                        src={`/images/schools/${school.image}`}
                        alt='Green double couch with wooden legs'
                        width={150}
                        height={150}
                      />
                    </div>
                    <Text color='blue.600' fontSize='2xl' className='font-bold'>
                      {school.short}
                    </Text>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Button variant='solid' colorScheme='blue'
                      onClick={() => selectTeam(String(school._id)) }
                    >
                      Otwórz
                    </Button>
                  </CardFooter>
                </Card>
              ))
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default Teams