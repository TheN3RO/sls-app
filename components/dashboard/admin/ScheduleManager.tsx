import { Button, Divider, Input } from '@chakra-ui/react'
import React from 'react'

const ScheduleManager = () => {
  return (
    <div>
			<div className='flex flex-grow space-x-2 p-2 items-center
			border border-gray-500'>
				<div>Harmonogram</div>	
				<Divider />
				<div className='rounded-full bg-green-600 p-2 px-5'>Dodany</div>
				<Divider />
				<div className='flex flex-grow gap-2'>
					<Button colorScheme='teal'>Aktualizuj</Button>
					<Button colorScheme='red'>Usuń</Button>
				</div>
			</div>
    </div>
  )
}

export default ScheduleManager