'use client';

import { MatchScheduleTable } from '@/components/client'
import Image from 'next/image';
import { Groups } from '@/constants';
import { Player } from '@/types/team';
import { assignMatchesForRound } from '@/utils/matchEngine';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'

const meetings = 4;
let allMatches: [Player, Player][][][] = [];

const MeetingsPage = () => {
	for (let i = 0; i < meetings; i++) {
			const roundMatches = assignMatchesForRound(Groups, i);
			allMatches.push(roundMatches); // Flatten the roundMatches array before pushing
	}

  return (
		<div className='bg-neutral-950 text-gray-200 relative'>
			<Image alt='dark background with light rectangles' 
				src="/background/dark-rect-bg.jpg" 
				width={1920} height={1080} 
				className='absolute top-0 left-0'
				quality={100}
				objectFit='contain'/>
			<div className='container pt-7 mx-auto'>
				<div className='text-5xl text-center py-20 relative z-10'>
					Spotkania
				</div>
				<Tabs isFitted className='text-white'>
					<TabList mb='1em'>
						<Tab className='text-white'>1</Tab>
						<Tab className='text-white'>2</Tab>
						<Tab className='text-white'>3</Tab>
						<Tab className='text-white'>4</Tab>
					</TabList>
					<TabPanels>
						<TabPanel className='text-white'>
							<MatchScheduleTable meetingMatches={[allMatches[0]]}/>
						</TabPanel>
						<TabPanel className='text-white'>
							<MatchScheduleTable meetingMatches={[allMatches[1]]} />
						</TabPanel>
						<TabPanel className='text-white'>
							<MatchScheduleTable meetingMatches={[allMatches[2]]} />
						</TabPanel>
						<TabPanel className='text-white'>
							<MatchScheduleTable meetingMatches={[allMatches[3]]} />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</div>
		</div>
  )
}

export default MeetingsPage