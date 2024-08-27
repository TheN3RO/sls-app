"use client";

import { AccountBox, CustomButton } from '@/components/common'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const DashboardHeader = () => {

  return (
    <header className='w-full p-3'>
    <div className='flex items-center'>
      <div className='flex-1 mx-[48px]'>
        <ul className='list-none flex'>
          <li className='mx-3 hover:text-white'><Link href="/">Home</Link></li>
          <li className='mx-3 hover:text-white'><Link href="/meetings">Spotkania</Link></li>
          <li className='mx-3 hover:text-white'><Link href="/gallery">Galeria</Link></li>
        </ul>
      </div>
      <AccountBox>
        
      </AccountBox>
    </div>
  </header>
  )
}

export default DashboardHeader