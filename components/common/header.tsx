"use client";

import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import AccountBox from './accountBox';

const Header = () => {
  return (
    <header className='bg-black text-neutral-400'>
      <div className='container mx-auto flex items-center'>
        <div className='flex'>
          <Image src='/logo/sls-logo.svg' alt='logo' width={56} height={56} className='p-2' />
          <Image src='/logo/sls-text-logo.svg' alt='logo-text' width={60} height={60} />
        </div>
        <div className='flex-1 mx-[48px]'>
          <ul className='list-none flex'>
            <li className='mx-3 hover:text-white'><Link href="/">Home</Link></li>
            <li className='mx-3 hover:text-white'><Link href="/meetings">Spotkania</Link></li>
            <li className='mx-3 hover:text-white'><Link href="/gallery">Galeria</Link></li>
          </ul>
        </div>
        <AccountBox />
      </div>
    </header>
  )
}

export default Header