import Image from 'next/image'
import React from 'react'
import CustomButton from '../common/customButton'

const Newsletter = () => {
  return (
    <section className='bg-black'>
      <div className='container mx-auto py-10 flex flex-wrap relative'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-auto md:left-auto md:translate-x-0 md:translate-y-0 md:w-1/3 z-0 md:static'>      
        <Image src='/images/hand-on-a-black-background-holding-a-vertical-letter-envelope-icon-perfect-composition-beautiful-d.png' 
          alt='newsletter' width={300} height={300} className='w-full h-full' />
        </div>
        <div className='w-full md:w-1/3 flex flex-col items-center z-10 bg-black/50 p-3'>
          <h2 className='text-white text-4xl font-semibold'>Zapisz się na newsletter</h2>
          <p className='text-white py-3'>Otrzymuj najnowsze informacje o turnieju szachowym</p>
          <form className='m-5 flex gap-3'>
            <input type='email' placeholder='Wpisz swój email' className='bg-white text-black outline-dotted outline-2 outline-offset-2 outline-white px-2' />
            <CustomButton title='Zapisz się' containerStyles='bg-black text-white p-3 border border-white' />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter