import Image from 'next/image'
import React from 'react'
import CustomButton from './customButton'

const Newsletter = () => {
  return (
    <section className='bg-black'>
      <div className='container mx-auto py-10 flex flex-wrap'>
        <div className='w-1/3'>
          <Image src='/images/hand-on-a-black-background-holding-a-vertical-letter-envelope-icon-perfect-composition-beautiful-d.png' alt='newsletter' width={500} height={500} className='w-full h-full' />
        </div>
        <div className='w-2/3'>
          <h2 className='text-white text-4xl font-semibold'>Zapisz się na newsletter</h2>
          <p className='text-white py-3'>Otrzymuj najnowsze informacje o turnieju szachowym</p>
          <form className='m-5 flex gap-3'>
            <input type='email' placeholder='Wpisz swój email' className='bg-white outline-dotted outline-2 outline-offset-2 outline-white px-2' />
            <CustomButton title='Zapisz się' containerStyles='bg-black text-white p-3 border border-white' />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter