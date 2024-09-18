"use client";

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import AccountBox from './accountBox';
import { motion, useAnimation } from 'framer-motion';

const Header = () => {
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call handler right away so state gets updated with initial window size

    return () => window.removeEventListener('resize', handleResize);
  }, [controls]);

  return (
    <header className='bg-black text-neutral-400'>
      <div className='container mx-auto flex items-center flex-wrap'>
        <div className='flex'>
          <Image src='/logo/sls-logo.svg' alt='logo' width={56} height={56} 
            className='p-2 min-w-12' />
          <Image src='/logo/sls-text-logo.svg' alt='logo-text' width={60} height={60} 
            className='min-w-12'/>
        </div>
        {!isMobile && (
          <motion.div
            className='flex-1 mx-[48px]'
            animate={controls}
            initial={{ opacity: 1, display: 'block' }}
          >
            <ul className='list-none flex'>
              <li className='mx-3 hover:text-white'><Link href="/">Home</Link></li>
              <li className='mx-3 hover:text-white'><Link href="/meetings">Spotkania</Link></li>
              <li className='mx-3 hover:text-white'><Link href="/gallery">Galeria</Link></li>
            </ul>
          </motion.div>
        )}
        <div className='ms-auto'>
          <AccountBox />
        </div>
        {isMobile && (
          <motion.div
            className='w-full mt-2 border-y-2'
          >
            <ul className='list-none flex justify-evenly'>
              <li className='my-2 hover:text-white'><Link href="/">Home</Link></li>
              <li className='my-2 hover:text-white'><Link href="/meetings">Spotkania</Link></li>
              <li className='my-2 hover:text-white'><Link href="/gallery">Galeria</Link></li>
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Header