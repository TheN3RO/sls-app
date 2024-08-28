"use client";

import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik'
import Image from 'next/image';
import React, { useState } from 'react'
import * as Yup from 'yup';

const AddSchoolForm = ({ formikRef, onClose, loadSchools }: { formikRef: any, onClose: () => void, loadSchools: () => void }) => {
	const validationSchema = Yup.object().shape({
		image: Yup.mixed().required('Image is required'),
		name: Yup.string().required('Name is required'),
		short: Yup.string().required('Short name is required'),
		address: Yup.string().required('Address is required'),
	});

	const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
		<Formik
			innerRef={formikRef}
			initialValues={{
				image: '',
				name: '',
				short: '',
				address: '',
			}}
			validationSchema={validationSchema}
			onSubmit={async (values, { setSubmitting }) => {
        const formData = new FormData();
        formData.append('image', values.image);
        formData.append('name', values.name);
        formData.append('short', values.short);
        formData.append('address', values.address);

        try {
          const response = await fetch('/api/schools', {
            method: 'POST',
            body: formData,
          });

          if (response.ok) {
            alert('School added successfully');
            onClose();
						loadSchools();
          } else {
            alert('Failed to add school');
          }
        } catch (error) {
          console.error('Error adding school:', error);
          alert('Failed to add school');
        } finally {
          setSubmitting(false);
        }
      }}
		>
			{({ errors, touched}) => (
				<Form>
					<Field name="image">
						{({ field, form }: any) => (
							<FormControl isInvalid={!!(errors.image && touched.image)}>
								<FormLabel htmlFor="image">Image</FormLabel>
								<Input
									type="file"
									id="image"
									onChange={(event) => {
										handleImageChange(event);
										form.setFieldValue("image", event.currentTarget.files?.[0]);
									}}
								/>
								{imagePreview && <Image src={imagePreview} alt="Image Preview" height={64} width={64} />}
								<FormErrorMessage>{errors.image}</FormErrorMessage>
							</FormControl>
						)}
					</Field>
					<Field name="name">
						{({ field }: any) => (
							<FormControl isInvalid={!!(errors.name && touched.name)}>
								<FormLabel htmlFor="name">Nazwa</FormLabel>
								<Input {...field} id="name" placeholder="Nazwa" />
								<FormErrorMessage>{errors.name}</FormErrorMessage>
							</FormControl>
						)}
					</Field>

					<Field name="short">
						{({ field }: any) => (
							<FormControl isInvalid={!!(errors.short && touched.short)}>
								<FormLabel htmlFor="short">Skrót</FormLabel>
								<Input {...field} id="short" placeholder="Skrót" />
								<FormErrorMessage>{errors.short}</FormErrorMessage>
							</FormControl>
						)}
					</Field>

					<Field name="address">
						{({ field }: any) => (
							<FormControl isInvalid={!!(errors.address && touched.address)}>
								<FormLabel htmlFor="address">Adres</FormLabel>
								<Input {...field} id="address" placeholder="Adres" />
								<FormErrorMessage>{errors.address}</FormErrorMessage>
							</FormControl>
						)}
					</Field>
				</Form>
			)}
		</Formik>
	);
}

export default AddSchoolForm