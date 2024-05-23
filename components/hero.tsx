import React from 'react'
import CustomButton from './customButton'

const Hero = () => {
  return (
    <section className='bg-gradient-to-b from-black to-indigo-500'>
      <h1 className='text-white'>Słupska Liga Szachowa</h1>
      <h1 className='capitalize text-indigo-500'>edycja druga</h1>
      <span>    
        <blockquote className="text-white italic">
          "Nauczcie dzieci grać w szachy, a o ich przyszłość możecie być spokojni." - Paul Morphy
        </blockquote>
      </span>
      <CustomButton 
        title="Zobacz spotkania"
        containerStyles="bg-gray-100 text-black rounded-md p-2" />
    </section>
  )
}

export default Hero