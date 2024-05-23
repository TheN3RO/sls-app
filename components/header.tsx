"use client";

import Image from 'next/image'
import React from 'react'
import CustomButton from './customButton'
import { Playfair_Display, Quicksand, Roboto } from 'next/font/google';
import styles from '@/styles/Header.module.css';

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
          <Image src='/sls-logo.svg' alt='logo' width={56} height={56} className='p-2' />
          <Image src='/sls-text-logo.svg' alt='logo-text' width={60} height={60} />
          {/* <h1 className={`tracking-wider text-white italic ${quicksand.className}`}>SLS</h1> */}
        </div>
        <div className='flex-1 mx-[48px]'>
          <ul className='list-none flex'>
            <li className='mx-3'>Home</li>
            <li className='mx-3'>Spotkania</li>
            <li className='mx-3'>Galeria</li>
          </ul>
        </div>
        <CustomButton 
          title="Zaloguj się"
          containerStyles="bg-gray-100 text-black rounded-md p-2"
          handleClick={handleLogin}/>
      </div>
    </header>
  )
}

export default Header