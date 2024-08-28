import React from 'react'
import Image from 'next/image'

const Matches = () => {
  return (
    <div className='relative'>
			<Image alt='dark background with light rectangles' 
				src="/background/dark-rect-bg.jpg" 
				width={1920} height={1080} 
				className='absolute top-0 left-0'
				quality={100}
				objectFit='contain'/>
			<div>TEST</div>
			
    </div>
  )
}

export default Matches