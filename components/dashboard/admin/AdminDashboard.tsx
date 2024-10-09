import React from 'react'
import { RegisterForm } from '@/components/auth'
import { Heading } from '@chakra-ui/react'

const AdminDashboard = () => {
  return (
    <div className='flex flex-col items-center bg-neutral-900'> 
      <Heading>AdminDashboard</Heading>
      <RegisterForm onRegisterSuccess={() => {}} />
    </div>
  )
}

export default AdminDashboard