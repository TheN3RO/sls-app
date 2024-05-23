import React from 'react'
import CustomButton from './customButton'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='bg-gradient-to-b from-black to-indigo-600 text-center flex justify-center flex-col p-48 relative'>
      <div className='leading-none'>
        <h1 className='text-white'>Słupska Liga Szachowa</h1>
        <h1 className='capitalize text-indigo-500'>edycja druga</h1>
      </div>
      <span>    
        <blockquote className="text-white italic mt-8">
          "Nauczcie dzieci grać w szachy, a o ich przyszłość możecie być spokojni." - Paul Morphy
        </blockquote>
      </span>
      <div>
        <CustomButton 
          title="Zobacz spotkania"
          containerStyles="bg-gray-100 text-black rounded-md p-2 mt-10 mb-5 content-between" />
      </div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-3/4'>
        <div className='w-full'>
          <div className='flex justify-between mx-auto'>
            <Image src='/decoration/chess_klt45.svg' alt='decoration1' width={120} height={120} className='p-2' />
            <Image src='/decoration/chess_kdt45.svg' alt='decoration2' width={120} height={120} className='p-2' />
          </div>
        </div>
        <div className='w-full'>
          <div className='flex justify-between w-11/12 items-center mx-auto'>
            <Image src='/decoration/chess_nlt45.svg' alt='decoration3' width={120} height={120} className='p-2' />
            <Image src='/decoration/chess_ndt45.svg' alt='decoration4' width={120} height={120} className='p-2' />
          </div>
        </div>
        <div className='w-full'>
          <div className='flex justify-between w-10/12 items-center mx-auto'>
            <Image src='/decoration/chess_rlt45.svg' alt='decoration4' width={120} height={120} className='p-2' />
            <Image src='/decoration/chess_rdt45.svg' alt='decoration4' width={120} height={120} className='p-2' />
          </div>  
        </div>
      </div>
    </section>
  )
}

export default Hero