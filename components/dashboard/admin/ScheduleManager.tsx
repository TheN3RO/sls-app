import { IShedule } from '@/types';
import { Button, Divider, Input } from '@chakra-ui/react'
import React, { use, useEffect, useState } from 'react'

const ScheduleManager = () => {
	const [ shedule, setShedule ] = useState<IShedule>();

	const fetchShedule = async () => {
		try {
			const res = await fetch('/api/shedule');
			const data = await res.json();
			setShedule(data);
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
				<div className={`rounded-full ${shedule?.status === 'added' ? "bg-green-600" : "bg-gray-600" } p-2 px-5 whitespace-nowrap`}>{shedule?.status === 'added' ? "Dodany" : "Nie dodany"}</div>
				<Divider />
				<div className='flex flex-grow gap-2'>
					{shedule?.status === 'added' ? (
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