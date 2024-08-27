import Image from 'next/image'
import styles from '../../styles/Hero.module.css'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  return (
    <section className='bg-gradient-to-b from-black to-indigo-600 text-center flex justify-center flex-col'>
      <div className='relative px-48 pt-36 pb-12'>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-3/4'>
          <div className='w-full relative'>
            <div className={`flex justify-between mx-auto ${styles.decorationBlurTiny} relative `}>
              <Image src='/decoration/chess_klt45.svg' alt='decoration1' width={120} height={120} className='p-2 relative ' />
              <Image src='/decoration/chess_kdt45.svg' alt='decoration2' width={120} height={120} className='p-2 relative ' />
            </div>
          </div>
          <div className='w-full relative'>
            <div className={`flex justify-between w-11/12 items-center mx-auto ${styles.decorationBlurSm} relative `}>
              <Image src='/decoration/chess_ndt45.svg' alt='decoration3' width={120} height={120} className='p-2 relative ' />
              <Image src='/decoration/chess_nlt45.svg' alt='decoration4' width={120} height={120} className='p-2 relative ' />
            </div>
          </div>
          <div className='w-full relative '>
            <div className={`flex justify-between items-center mx-auto ${styles.decorationBlurMd} relative`}>
              <Image src='/decoration/chess_rlt45.svg' alt='decoration4' width={120} height={120} className='p-2 relative ' />
              <Image src='/decoration/chess_rdt45.svg' alt='decoration4' width={120} height={120} className='p-2 relative ' />
            </div>  
          </div>
        </div>
        <div className='leading-none relative z-10'>
          <h1 className='text-white'>Słupska Liga Szachowa</h1>
          <h1 className='capitalize text-indigo-500'>edycja druga</h1>
        </div>
        <div className='mt-8 relative z-10'>
          <code className="text-white italic">
            "Nauczcie dzieci grać w szachy, a o ich przyszłość możecie być spokojni." - Paul Morphy
          </code>
        </div>
        <div className='relative z-10'>
          <Button 
            className='text-black rounded-md p-2 mt-10 mb-5'
            onClick={() => {router.push('/meetings')}}>
            Zobacz spotkania
          </Button>
        </div>
      </div>
      <div className='mx-auto'>
        <Image 
          src='/images/chess-image-with-jagged-edges-perfect-composition-beautiful-detailed-intricate-insanely-detailed-o.png' 
          alt='decoration2' 
          width={1200} 
          height={480} 
          className={`rounded-lg ${styles.imageBorderAnimation}`} 
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
    </section>
  )
}

export default Hero