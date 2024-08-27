import React from 'react'
import Image from 'next/image'

const AdminSideBar = () => {
  return (
    <div className='w-min h-screen'>
			<div className='flex justify-center w-[56px] mx-2'>
				<Image src='/logo/sls-logo.svg' alt='logo' width={56} height={56} className='p-2' />
				{/* <Image src='/logo/sls-text-logo.svg' alt='logo-text' width={60} height={60} /> */}
			</div>
    </div>
  )
}

export default AdminSideBar