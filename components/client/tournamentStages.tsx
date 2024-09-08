import Image from 'next/image'
import React from 'react'

const TournamentStages = () => {
  return (
    <section className='bg-black'>
        <div className='container mx-auto flex flex-wrap'>
            <div className='w-1/2 p-3 py-20'>
                <div className='bg-white text-black text-lg font-medium text-nowrap w-min p-0.5 mb-3 px-2'>ETAPY TURNIEJU</div>
                <div className='text-6xl font-bold text-indigo-500'>Jak działa nasz turniej szachowy</div>
                <div className='flex gap-5 py-10'>
                    <div className='w-[3px] bg-gradient-to-b from-black to-fuchsia-500'></div>
                    <div className='flex gap-14 flex-col text-black my-10'>
                        <div className='flex gap-3'>
                            <div>
                                <div className='bg-white w-10 h-10 rounded-full flex items-center justify-center mt-2'>1</div>
                            </div>
                            <div>
                                <div className='text-white text-2xl font-bold'>Rejestracja graczy</div>
                                <div className='text-white'>Rejestracha szkół, graczy turnieju oraz rezerwowych</div>                                
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div>
                                <div className='bg-white w-10 h-10 rounded-full flex items-center justify-center mt-2'>2</div>
                            </div>
                            <div>
                                <div className='text-white text-2xl font-bold'>Rywalizacja między graczami</div>
                                <div className='text-white'>Gracze będą rywalizować między sobą w meczach, poprzez 4 spotkania.</div>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div>
                                <div className='bg-white w-10 h-10 rounded-full flex items-center justify-center mt-2'>3</div>
                            </div>
                            <div>
                                <div className='text-white text-2xl font-bold'>Aktualizacja wyników i ogłoszenie zwycięzców</div>
                                <div className='text-white'>Wyniki meczów będą regularnie aktualizowane, a zwycięzcy zostaną ogłoszeni na zakończenie turnieju.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 p-3 py-20'>
                <Image src='/images/chess-pieces-imbued-with-a-broken-glass-effect-floating-in-void-with-no-background-embody-mythical.jpeg' alt='tournament stages image' width={500} height={500} className='rounded-md w-full h-full object-cover'/>
            </div>
        </div>
    </section>
  )
}

export default TournamentStages