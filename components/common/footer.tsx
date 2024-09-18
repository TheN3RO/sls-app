import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge, Button, Center, Divider } from '@chakra-ui/react'

const Footer = ({ mode }: { mode: "full" | "compact" }) => {
  return (    
    <footer className={`bg-neutral-900 z-20 ${mode === "compact" && "rounded-lg px-5 m-5"}`}>
      <div className='container mx-auto py-3'>
        {mode === 'full' && (
          <div className='flex items-center flex-wrap gap-5 w-full border-t-2 border-b-2 my-3 py-3'>
            <div className='flex-1 min-w-80'>
              <div className='w-2/3 min-w-80 mx-auto flex relative'>
                <Image src='/logo/zsel-logo.png' alt='zsel logo' width={128} height={128} className='p-2' />
                <div className='flex flex-col'>
                  <p className='pt-5 pb-2 text-sm font-bold' >Zespół Szkół "Elektryk" im. Noblistów Polskich w Słupsku</p>
                  <Link href='https://zselektryk.slupsk.pl'><Button size='sm'>Strona</Button></Link>
                </div>
                <Badge variant='outline' colorScheme='blue' className='absolute bottom-5 right-0'>
                  Organizator
                </Badge>
              </div>
            </div>
            <Center height='50px'>
              <Divider orientation='vertical' />
            </Center>
            <div className='flex-1 min-w-80'>
              <div className='w-2/3 min-w-80 mx-auto flex relative'>
                <Image src='/logo/zsmil-logo.png' alt='zsmil logo' width={128} height={128} className='p-2' />
                <div className='flex flex-col'>
                  <p className='pt-5 pb-2 text-sm font-bold'>Zespół Szkół Mechanicznych i Logistycznych im. Tadeusza Tańskiego</p>
                  <Link href='https://mechanik.slupsk.pl'><Button size='sm'>Strona</Button></Link>
                </div>
                <Badge variant='outline' colorScheme='blue' className='absolute bottom-5 right-0'>
                  Organizator
                </Badge>
              </div>
            </div>
          </div>
        )}
        {mode === 'full' && (
          <div className='flex flex-wrap gap-5 w-full'>
            <div className='flex items-center gap-3 w-full justify-center md:basis-1/3'>
              <div className='flex'>
                <Image src='/logo/sls-logo.svg' alt='logo' width={42} height={42} 
                  className='p-2 min-w-10' />
                <Image src='/logo/sls-text-logo.svg' alt='logo-text' width={45} height={45} 
                  className='min-w-11' />
              </div>
              <h2 className='text-2xl font-semibold'>Słupska Liga Szachowa</h2>
            </div>
            <div className='flex justify-evenly grow my-3 flex-wrap'>
              <div>
                <h3 className='text-lg font-semibold mb-3'>O nas</h3>
                <ul className='text-neutral-300 text-sm'>
                  <Link href=''><li className='hover:text-neutral-100 mb-2'>Historia</li></Link>
                  <Link href=''><li className='hover:text-neutral-100 mb-2'>Regulamin</li></Link>
                  <Link href=''><li className='hover:text-neutral-100 mb-2'>Statystyki</li></Link>
                </ul>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-3'>Kontakt</h3>
                <ul className='text-neutral-300 text-sm'>
                  <Link href=''><li className='hover:text-neutral-100 mb-2'>Telefon: 123-456-789</li></Link>
                  <Link href=''><li className='hover:text-neutral-100 mb-2'>Email: test@example.com</li></Link>
                  <Link href=''><li className='hover:text-neutral-100 mb-2'>Adres: ul. Testowa 123</li></Link>
                </ul>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-3'>Media</h3>
                <ul className='text-neutral-300 text-sm'>
                  <Link href=''><li className='hover:text-neutral-100 mb-2'>Facebook</li></Link>
                  <Link href=''><li className='hover:text-neutral-100 mb-2'>Instagram</li></Link>
                  <Link href=''><li className='hover:text-neutral-100 mb-2'>YouTube</li></Link>
                </ul>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-3'>Dla graczy</h3>
                <ul className='text-neutral-300 text-sm'>
                  <Link href=''><li className='hover:text-neutral-100 mb-2'>Rejestracja</li></Link>
                  <Link href=''><li className='hover:text-neutral-100 mb-2'>Logowanie</li></Link>
                  <Link href=''><li className='hover:text-neutral-100 mb-2'>Ranking</li></Link>
                </ul>
              </div>
            </div>
          </div>
        )}
        <div className={`flex justify-between w-full ${mode === "full" && "mt-10"} my-3 text-gray-300 text-sm`}>
          <p>&copy; 2024 Słupska Liga Szachowa. Wszelkie prawa zastrzeżone.</p>
          <div className='space-x-5'>
            <Link href=''>Polityka prywatności</Link>
            <Link href=''>Ciasteczka</Link>
            <Link href=''>Regulamin</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer