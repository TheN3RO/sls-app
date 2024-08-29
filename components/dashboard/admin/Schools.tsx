"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Checkbox, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Card, Heading, CardBody, Divider, Stack, ButtonGroup, CardFooter } from '@chakra-ui/react';
import AddSchoolForm from './AddSchoolForm';
import { FormikProps } from 'formik';
import { School } from '@/types';

const Schools = () => {
	const formikRef = useRef<FormikProps<{ image: string; name: string; short: string; address: string; }>>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

	const [ schools, setSchools ] = useState<School[]>([]);

	const handleSubmit = () => {
    if (formikRef.current) {
      formikRef.current.handleSubmit();
    }
  };

	const handleEdit = async (id: string, updateData: Partial<School>) => {
    try {
      const response = await fetch(`/api/schools`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...updateData }),
      });
      if (response.ok) {
        loadSchools(); // Reload schools after editing
      }
    } catch (error) {
      console.error('Failed to update school:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/schools`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        loadSchools(); // Reload schools after deletion
      }
    } catch (error) {
      console.error('Failed to delete school:', error);
    }
  };

	const fetchSchools = async () => {
		const response = await fetch('/api/schools');
		if (!response.ok) {
			throw new Error('Failed to fetch schools');
		}
		return response.json();
	};

	const loadSchools = async () => {
    try {
      const data = await fetchSchools();
      setSchools(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadSchools();
  }, []);

  return (
    <div className='relative'>
      <Image alt='dark background with light rectangles'  
        src="/background/light-dark-rect-bg.jpg" 
        width={1920} height={1080} 
        className='absolute top-0 left-0'
        objectFit='contain'/>
      <div className='relative z-10 bg-neutral-900/70 m-5 p-5 rounded-lg min-h-[800px]'>
        <div className='flex gap-10'>
          <h1 className='text-4xl font-bold text-neutral-100'>Szkoły</h1>
          <div className='flex flex-grow justify-end gap-3'>
            <Button onClick={onOpen} className='p-2 text-neutral-100 rounded-lg'>Dodaj</Button>
            <Button colorScheme='red' className='p-2 text-neutral-100 rounded-lg'>Usuń seryjnie</Button>
          </div>
        </div>
				<div className='flex justify-start flex-wrap gap-5 mt-5'>
					{schools.map((school, index) => (
						<Card maxW='sm' key={index}>
							<CardBody className='relative'>
								<Checkbox className='absolute top-0 left-0' value={school._id}></Checkbox>
								<div className='min-h-[200px] flex justify-center items-center rounded-lg'>
									<Image
										src={`/images/schools/${school.image}`}
										alt='Green double couch with wooden legs'
										width={200}
										height={200}
									/>
								</div>
								<Stack mt='6' spacing='3'>
									<Heading size='md'>{school.name}</Heading>
									<Text>
										{school.address}
									</Text>
									<Text color='blue.600' fontSize='2xl' className='font-bold'>
										{school.short}
									</Text>
								</Stack>
							</CardBody>
							<Divider />
							<CardFooter>
								<ButtonGroup spacing='2'>
									<Button variant='solid' colorScheme='blue'>
										Edytuj
									</Button>
									<Button variant='ghost' colorScheme='blue'
										onClick={() => handleDelete(school._id)}
									>
										Usuń
									</Button>
								</ButtonGroup>
							</CardFooter>
						</Card>
						))}
				</div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Dodaj nową szkołę</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
						<AddSchoolForm formikRef={formikRef} onClose={onClose} loadSchools={loadSchools} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
              Zapisz
            </Button>
            <Button variant='ghost' onClick={onClose}>Anuluj</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Schools;