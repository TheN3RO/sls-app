import Image from 'next/image'
import React from 'react'

const TournamentInfo = () => {
  return (
    <section className='bg-white'>
        <div className='container mx-auto py-20 flex flex-wrap'>
            <div className='w-1/2 p-3 py-20'>
                <span className='text-black text-5xl font-bold '>Prestiż, nagrody i niezapomniane doświadczenie dla uczestników turnieju szachowego</span>
                <p className='my-6 text-gray-500'>Dołącz do naszego prestiżowego turnieju szachowego i zdobądź nie tylko nagrody, ale także cenne doświadczenie.</p>
                <div className='flex gap-3 mt-20'>
                    <div className='bg-neutral-100 p-2'>
                        <span className='text-xl black'>Prestiż</span>
                        <p className='text-sm text-black my-3'>Zdobądź prestiżowy tytuł mistrza szachowego i zyskaj szacunek w świecie szachów.</p>
                    </div>
                    <div className='bg-neutral-100 p-2'>
                        <span className='text-xl text-black'>Nagrody</span>
                        <p className='text-sm text-black my-3'>Wygraj atrakcyjne nagrody, takie jak puchary, medale i vouchery na zakupy.</p>
                    </div>
                </div>
            </div>
            <div className='w-1/2 p-3'>
                <Image src='/images/carousel_6.jpg' alt='tournament information image' width={500} height={500} className='rounded-md w-full h-full object-cover'/>
            </div>
        </div>
    </section>
  )
}

export default TournamentInfo