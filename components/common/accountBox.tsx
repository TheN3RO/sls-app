import { Avatar, Box, Button, HStack, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Skeleton, SkeletonCircle } from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RiArrowDownSLine } from 'react-icons/ri';

const AccountBox = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <HStack>
      <SkeletonCircle size='8' />
      <Skeleton height={6} width={112} />
      <RiArrowDownSLine className='mx-1 size-5'/>
    </HStack>;
  }

  return (
    <div className='z-50'>
      {session ? (
        <Menu>
          <MenuButton as={Box} p={1} className='cursor-pointer'>
            <div className='flex items-center'>
              <Avatar name='Dan Abrahmov' src={session.user.image ?? undefined} size='sm'/>
              <span className='ms-2 max-w-[112px] truncate'>{session.user?.name}</span>
              <RiArrowDownSLine className='mx-1 size-5'/>
            </div>
          </MenuButton>
          <MenuList sx={{ bg: 'neutral.900'}} className='bg-neutral-900'> 
            <MenuItem 
              sx={{bg: 'neutral.900'}} 
              className='hover:text-neutral-100 transition duration-300'
            >
              <Link href="/dashboard/client">Moje Konto</Link>
            </MenuItem>
            <MenuItem 
              sx={{bg: 'neutral.900'}} 
              className='hover:text-neutral-100 transition duration-300'
            >
              <Link href="/dashboard">Panel</Link>
            </MenuItem>
            <MenuItem 
              sx={{bg: 'neutral.900', color: 'red.800'}} 
              className='hover:text-red-600 transition duration-300'
              onClick={() => {
                signOut();
                router.push('/');
            }}
            >
              Wyloguj
            </MenuItem>
            <MenuDivider />
            <MenuItem 
              sx={{bg: 'neutral.900'}} 
              className='hover:text-neutral-100 transition duration-300'
            >
              FAQ
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Button size='sm' className="bg-gray-100 text-sm text-black rounded-md p-1">
          <Link href='/login'>Zaloguj się</Link>
        </Button>
      )}
    </div>
  );
};

export default AccountBox;