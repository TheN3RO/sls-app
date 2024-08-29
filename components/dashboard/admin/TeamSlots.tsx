import { Avatar, Divider, List, ListItem } from '@chakra-ui/react'
import React from 'react'

const TeamSlots = () => {
  return (
    <div className='flex my-10'>
      <List spacing={3} className='min-w-64'>
        <ListItem className='border border-neutral-800 rounded-lg p-3 h-20'>
          <Avatar name='Kacper' />
          <span className='ml-4'>Kacper</span>
        </ListItem>
        <ListItem className='border border-neutral-800 rounded-lg p-3 h-20'>
          <Avatar name='Kacper' />
          <span className='ml-4'>Kacper</span>
        </ListItem>
        <ListItem className='border border-neutral-800 rounded-lg p-3 h-20'>
          <Avatar name='Kacper' />
          <span className='ml-4'>Kacper</span>
        </ListItem>
        <ListItem className='border border-neutral-800 rounded-lg p-3 h-20'>
          <Avatar name='Kacper' />
          <span className='ml-4'>Kacper</span>
        </ListItem>
        <ListItem className='border border-neutral-800 rounded-lg p-3 h-20'>
          <Avatar name='Kacper' />
          <span className='ml-4'>Kacper</span>
        </ListItem>
        <ListItem className='border border-neutral-800 rounded-lg p-3 h-20'>
          <Avatar name='Kacper' />
          <span className='ml-4'>Kacper</span>
        </ListItem>
        <ListItem className='border border-neutral-800 rounded-lg p-3 h-20'>
          <Avatar name='Kacper' />
          <span className='ml-4'>Kacper</span>
        </ListItem>
      </List>
      <Divider orientation='vertical' height="630px" borderColor="gray.400" className='mx-3'/>
      <div className='flex flex-col items-center justify-center flex-grow mx-5 gap-10'>
        <div className='space-y-1'>
          <span>Moderator</span>
          <div className='border border-neutral-800 rounded-lg p-3 w-64 h-20'></div>
        </div>
        <div className='space-y-1'>
          <span>Główni gracze</span>
          <div className='flex flex-wrap justify-center gap-3'>
            <div className='border border-neutral-800 rounded-lg p-3 w-64 h-20'></div>
            <div className='border border-neutral-800 rounded-lg p-3 w-64 h-20'></div>
            <div className='border border-neutral-800 rounded-lg p-3 w-64 h-20'></div>
            <div className='border border-neutral-800 rounded-lg p-3 w-64 h-20'></div>
          </div>
        </div>
        <div className='space-y-1'>
          <span>Rezerwowi gracze</span>
          <div className='flex flex-wrap justify-center gap-3'>
            <div className='border border-neutral-800 rounded-lg p-3 w-64 h-20'></div>
            <div className='border border-neutral-800 rounded-lg p-3 w-64 h-20'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSlots