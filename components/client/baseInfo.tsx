import React from 'react'
import { FaChess, FaListAlt } from 'react-icons/fa'
import { GiTrophyCup } from 'react-icons/gi'
import CustomButton from '../common/customButton'

const BaseInfo = () => {
  return (
    <section className='bg-orange-300'>
        <div className='container mx-auto pt-[50px]'>
            <div className='text-gray-600 my-2'>Informacje</div>
            <div className='w-1/2'>
                <h1 className='text-5xl'>Harmonogram, zasady i nagrody</h1>
            </div>
            <div className='w-1/2 flex'>
                <h1 className='text-5xl'>turnieju szachowego</h1>
                <div className='mx-1 my-2'>
                    <span className='bg-indigo-500 text-white font-semibold text-lg p-0.5'>EDYCJA DRUGA</span>                
                </div>
            </div>
            <p className='text-lg w-1/2 mt-4 mb-8'>Zapoznaj się z harmonogramem, zasadami i nagrodami turnieju szachowego. Przygotuj się na emocjonujące rozgrywki i rywalizację na najwyższym poziomie.</p>
            <div className='flex justify-between flex-wrap'>
                <div className='w-[500px] h-[250px] bg-white p-4 rounded-lg my-4'>
                    <FaChess className='text-4xl my-4'/>
                    <span className='text-3xl font-bold'>Harmonogram turnieju szachowego</span>
                    <p className='text-lg'>Zapoznaj się z harmonogramem turnieju szachowego i przygotuj się na emocjonujące rozgrywki.</p>
                </div>
                <div className='w-[500px] h-[250px] bg-white p-4 rounded-lg my-4'>
                    <FaListAlt className='text-4xl my-4'/>
                    <span className='text-3xl font-bold'>Zasady turnieju szachowego</span>
                    <p className='text-lg'>Zapoznaj się z zasadami turnieju szachowego i przygotuj się na emocjonujące rozgrywki.</p>
                </div>
                <div className='w-[500px] h-[250px] bg-white p-4 rounded-lg my-4'>
                    <GiTrophyCup className='text-4xl my-4'/>
                    <span className='text-3xl font-bold'>Nagrody turnieju szachowego</span>
                    <p className='text-lg'>Zapoznaj się z nagrodami turnieju szachowego i przygotuj się na emocjonujące rozgrywki.</p>
                </div>
            </div>
            <div className='flex gap-3 pt-10 pb-20'>
                <CustomButton title='Zobacz' containerStyles='text-md text-black rounded-md p-4 border border-gray-400'></CustomButton>
            </div>
        </div>
    </section>
  )
}

export default BaseInfo