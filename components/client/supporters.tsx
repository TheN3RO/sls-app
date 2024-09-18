import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Supporters.module.css'

const Supporters = () => {
  return (
    <section className={`flex justify-center bg-black shadow-supportersShadow relative z-20 p-4 overflow-auto ${styles.hideScrollbar}`}>
      <Image src='/logo/LOGO_SLUPSK.svg' alt='słupsk city logo' width={200} height={50} 
      className='mx-4 my-2 p-3'/>
      <Image src='/logo/majstero_logo.svg' alt='majstero logo' width={200} height={50} 
      className='mx-4 my-2 p-3'/>
      <Image src='/logo/trzy_fale_logo.svg' alt='trzy fale logo' width={200} height={50} 
      className='mx-4 my-2 p-3'/>
    </section>
  )
}

export default Supporters