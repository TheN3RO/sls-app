import React, { useState } from 'react';
import Image from 'next/image';
import { MdLogout, MdOutlineScoreboard, MdOutlineSpaceDashboard } from 'react-icons/md';
import { PiRanking } from 'react-icons/pi';
import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import styles from '../../../styles/SideBar.module.css';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const ModeratorSideBar = ({ onSelect }: { onSelect: (page: string) => void }) => {
  const router = useRouter();

  const [isHovered, setIsHovered] = useState(false);
  const [isHalfway, setIsHalfway] = useState(false);

  return (
    <motion.div
      className='h-screen flex flex-col'
      initial={{ width: '72px' }}
      animate={{ width: isHovered ? '250px' : '72px', boxShadow: isHovered ? 'rgba(64, 64, 64, 0.25) 0px 54px 55px, rgba(64, 64, 64, 0.12) 0px -12px 30px, rgba(64, 64, 64, 0.12) 0px 4px 6px, rgba(64, 64, 64, 0.17) 0px 12px 13px, rgba(64, 64, 64, 0.09) 0px -3px 5px' : 'none' }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onUpdate={(latest) => {
        const widthValue = parseFloat(String(latest.width).replace('px', ''));
        if (widthValue > 150) {
          setIsHalfway(true);
        } else {
          setIsHalfway(false);
        }
      }}
    >
      <div className='flex items-center w-full mx-2 mb-4'>
        {/* Main Logo */}
        <Image src='/logo/sls-logo.svg' alt='logo' width={56} height={56} className='p-2' />

        {/* Text Logo - fades in and moves into place when hovered */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 10 : -20 }}
          transition={{ duration: 0.5 }}
          className='ml-2'
        >
          <Image src='/logo/sls-text-logo.svg' alt='logo-text' width={72} height={60} className='p-2' />
        </motion.div>
      </div>

      <div className='flex-grow flex flex-col'>
      <List spacing={5} className='w-full flex-grow flex flex-col m-5'>
        <ListItem className={`flex items-center hover:text-white group ${styles.listItemTextShadow}`}>
          <ListIcon as={MdOutlineSpaceDashboard} className='text-gray-300 group-hover:text-white' w={8} h={8} />
          {(isHovered && isHalfway) && <span className='ml-4 text-gray-300 group-hover:text-white whitespace-nowrap'>Panel</span>}
        </ListItem>
        <ListItem className={`flex items-center hover:text-white group ${styles.listItemTextShadow}`}>
          <ListIcon as={MdOutlineScoreboard} className='text-gray-300 group-hover:text-white' w={8} h={8} />
          {(isHovered && isHalfway) && <span className='ml-4 text-gray-300 group-hover:text-white whitespace-nowrap'>Wyniki Grupy</span>}
        </ListItem>
        <ListItem className={`flex items-center hover:text-white group ${styles.listItemTextShadow}`}>
          <ListIcon as={PiRanking} className='text-gray-300 group-hover:text-white' w={8} h={8} />
          {(isHovered && isHalfway) && <span className='ml-4 text-gray-300 group-hover:text-white whitespace-nowrap'>Ranking</span>}
        </ListItem>

        <div className='flex-grow'></div>
        <ListItem 
          className={`flex items-center cursor-pointer hover:text-red-700 group ${styles.listItemTextShadowRed}`}
          onClick={() => {
            signOut()
            router.push('/');
          }}
        >
          <ListIcon as={MdLogout} className='text-gray-300 group-hover:text-red-700' w={8} h={8} />
          {(isHovered && isHalfway) && (
            <span className='ml-4 text-gray-300 group-hover:text-red-700 whitespace-nowrap'>
              Wyloguj
            </span>
          )}
        </ListItem>
      </List>
      </div>
    </motion.div>
  );
};

export default ModeratorSideBar;