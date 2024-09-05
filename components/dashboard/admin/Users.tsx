import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button, Checkbox, Divider, Input, InputGroup, InputRightAddon, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import RegisterModal from './RegisterModal';
import { IUser } from '@/types';

const Users = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [users, setUsers] = useState([]);

	const fetchUsers = async () => {
		const response = await fetch('/api/users');
		if (!response.ok) {
			throw new Error('Failed to fetch users');
		}
		return response.json();
	};

	const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

	useEffect(() => {
		loadUsers();
	}, []);

  return (
    <div className='relative'>
    <Image alt='dark background with light rectangles'  
      src="/background/light-dark-rect-bg.jpg" 
      width={1920} height={1080} 
      className='absolute top-0 left-0'
      objectFit='contain'/>
      <div className='relative z-10 bg-neutral-900/70 m-5 p-5 rounded-lg min-h-[800px]'>
        <div className='flex gap-10 my-3 sticky top-0'>
          <h1 className='text-4xl font-bold text-neutral-100'>Użytkownicy</h1>
					<InputGroup >
						<Input placeholder='Wyszukaj użytkownika' />
						<InputRightAddon>
							<button aria-label='Search database'><FiSearch className='text-xl' /></button>
						</InputRightAddon>
					</InputGroup>
					<div className='ms-auto flex gap-3'>
						<Button variant='solid' colorScheme='blue' className='ml-auto' onClick={onOpen}>Dodaj</Button>
						<Button variant='solid' colorScheme='red' className='ml-auto'>Usuń</Button>
					</div>
        </div>
				<TableContainer className='mt-5 text-sm'>
					<Table variant='simple'>
						<Thead>
							<Tr>
								<Th></Th>
								<Th>Nazwa</Th>
								<Th>Szkoła</Th>
								<Th>Typ</Th>
								<Th>Rola</Th>
								<Th>Data</Th>
							</Tr>
						</Thead>
						<Tbody>
							{users.map((user: IUser) => (
								<Tr key={String(user._id)} className='bg-transparent hover:bg-slate-700 transition duration-50'>
									<Td><Checkbox type='checkbox' /></Td>
									<Td onClick={() => {}} className='cursor-pointer underline'>{user.name}</Td>
									<Td>{user.school ? user.school : "-" }</Td>
									<Td>{user.role}</Td>
									<Td>{user.teamRole ? user.teamRole : "-" } </Td>
									<Td>{new Date(user.createdAt).toLocaleString()}</Td>
								</Tr>
							))}
						</Tbody>			
					</Table>
				</TableContainer>
			</div>
			<RegisterModal isOpen={isOpen} onClose={onClose} loadUsers={loadUsers} />
    </div>
  )
}

export default Users