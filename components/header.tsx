"use client";

import Image from 'next/image'
import React from 'react'
import CustomButton from './customButton'
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const Header = () => {
  const handleLogin = () => {};

  return (
    <header className='bg-black text-neutral-400'>
      <div className='container mx-auto flex items-center'>
        <div className='flex'>
          <Image src='/logo/sls-logo.svg' alt='logo' width={56} height={56} className='p-2' />
          <Image src='/logo/sls-text-logo.svg' alt='logo-text' width={60} height={60} />
        </div>
        <div className='flex-1 mx-[48px]'>
          <ul className='list-none flex'>
            <li className='mx-3 hover:text-white'>Home</li>
            <li className='mx-3 hover:text-white'>Spotkania</li>
            <li className='mx-3 hover:text-white'>Galeria</li>
          </ul>
        </div>
        <CustomButton 
          title="Zaloguj się"
          containerStyles="bg-gray-100 text-sm text-black rounded-md p-2"
          handleClick={handleLogin}/>
      </div>
    </header>
  )
}

export default Header