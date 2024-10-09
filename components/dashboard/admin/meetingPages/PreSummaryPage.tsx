import { ISchedule, ISchool } from '@/types'
import Image from 'next/image';
import { Button, Checkbox, Divider } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const PreSummaryPage = ({schedule}: {schedule: ISchedule}) => {
	const [ schools, setSchools ] = useState<ISchool[]>([]);

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
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-1/3 min-w-[600px] aspect-square
        bg-neutral-700 mx-auto rounded-sm p-5
        flex flex-col gap-3'
      >
        <div className='text-3xl'>Ustawienia spotkania</div>
        <Divider />
        <div className='grow flex w-full'>
          <div className='flex-1 flex flex-col my-1 p-2 border 
          border-gray-300 rounded bg-neutral-800 space-y-3'>
            <div className='text-xl text-center'>Szkoły</div>
            <div className='h-full'>
              {schools.map((school) => (
                <div key={school.short} className='flex gap-1'>
                  <Checkbox value={school.short} />
                  <div className='min-w-[40px] flex items-center'>
                    <Image
                        src={`/images/schools/${school.image}`}
                        alt='Green double couch with wooden legs'
                        width={40}
                        height={40}
                      />
                  </div>
                  <div className='line-clamp-2'>{school.name}</div>
                </div>
              ))}
            </div>
            <div className='bg-neutral-900 p-2 w-full'>
              <Button colorScheme='red' className='w-full'>Usuń ze spotkania</Button>
            </div>
          </div>
          <div className='flex-1'></div>
        </div>
        <div className='ms-auto space-x-5'>
          <Button>Anuluj</Button>
          <Button colorScheme='blue'>Rozpocznij</Button>
        </div>
      </div>
    </div>
  )
}

export default PreSummaryPage