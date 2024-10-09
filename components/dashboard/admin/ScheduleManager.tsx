import { ISchedule } from '@/types';
import { Button, Divider, Input } from '@chakra-ui/react'
import React, { use, useEffect, useState } from 'react'

const ScheduleManager = () => {
	const [ schedule, setSchedule ] = useState<ISchedule>();

	const fetchShedule = async () => {
		try {
			const res = await fetch('/api/schedule');
			const data = await res.json();
			setSchedule({ status: data.length > 0 ? 'added' : 'deleted', data: data });
		} catch (err) {
			console.error(err);
		}
	}

	useEffect(() => {
		fetchShedule();
	}, []);

  return (
    <div>
			<div className='flex flex-grow space-x-2 p-2 items-center
				border border-gray-500'>
				<div>Harmonogram</div>	
				<Divider />
				<div className={`rounded-full ${schedule?.status === 'added' ? "bg-green-600" : "bg-gray-600" } p-2 px-5 whitespace-nowrap`}>{schedule?.status === 'added' ? "Dodany" : "Nie dodany"}</div>
				<Divider />
				<div className='flex flex-grow gap-2'>
					{schedule?.status === 'added' ? (
						<Button colorScheme='teal'>Aktualizuj</Button>
					) : (
						<Button colorScheme='green'>Dodaj</Button>
					)}
					<Button colorScheme='red'>Usuń</Button>
				</div>
			</div>
    </div>
  )
}

export default ScheduleManager