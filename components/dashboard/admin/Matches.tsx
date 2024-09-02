import React from 'react'
import Image from 'next/image'
import { Button } from '@chakra-ui/react'
import ScheduleManager from './ScheduleManager'

const Matches = () => {
  return (
    <div className='relative'>
      <Image alt='dark background with light rectangles'  
        src="/background/light-dark-rect-bg.jpg" 
        width={1920} height={1080} 
        className='absolute top-0 left-0'
        objectFit='contain'/>
      <div className='relative z-10 bg-neutral-900/70 m-5 p-5 rounded-lg min-h-[800px]'>
				<h1 className='text-4xl font-bold text-neutral-100'>Matches</h1>
        <div className='pt-4'>
					<ScheduleManager />
        </div>
				<div className='py-10'>
					<div className='flex justify-between flex-wrap mt-4 gap-y-5'>
						<div className='
							min-w-48 basis-1/5 h-48 flex gap-3
							flex-col items-center justify-center
							bg-neutral-800 p-3 rounded-lg
							border border-violet-500
						'>
							<span className='text-2xl'>Spotkanie 1</span>
							<Button>Rozpocznij</Button>
						</div>
						<div className='
							min-w-48 basis-1/5 h-48 flex gap-3
							flex-col items-center justify-center
							bg-neutral-800 p-3 rounded-lg	
							border border-blue-500
						'>
							<span className='text-2xl'>Spotkanie 2</span>
							<Button>Rozpocznij</Button>
						</div>
						<div className='
							min-w-48 basis-1/5 h-48 flex gap-3
							flex-col items-center justify-center
							bg-neutral-800 p-3 rounded-lg	
							border border-cyan-500
						'>
							<span className='text-2xl'>Spotkanie 3</span>
							<Button>Rozpocznij</Button>
						</div>
						<div className='
							min-w-48 basis-1/5 h-48 flex gap-3
							flex-col items-center justify-center
							bg-neutral-800 p-3 rounded-lg	
							border border-emerald-500
						'>
							<span className='text-2xl'>Spotkanie 4</span>
							<Button>Rozpocznij</Button>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Matches