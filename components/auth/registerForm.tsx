"use client";

import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react'
import { Button, FormControl, FormErrorMessage, FormLabel, IconButton, Input, InputGroup, InputRightElement, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Radio, RadioGroup, Select, Stack, Text, useClipboard } from '@chakra-ui/react';
import { FiCopy } from 'react-icons/fi';

const RegisterForm: React.FC = () => {
	const validationSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Email is required'),
		name: Yup.string().required('Name is required'),
    role: Yup.string().required('Role is required'),
    school: Yup.string(),
		accountType: Yup.string().oneOf(['provision', 'static']).required('Account type is required'),
		password: Yup.string().when('accountType', {
			is: "static",
			then: (schema) => schema.required('Password is required').min(8, 'Password must be at least 8 characters'),
			otherwise: (schema) => schema.notRequired(),
		}),
		confirmPassword: Yup.string().when('accountType', {
			is: "static",
			then: (schema) =>
				schema
					.required('Confirm password is required')
					.oneOf([Yup.ref('password')], 'Passwords must match'),
			otherwise: (schema) => schema.notRequired(),
		}),
		passwordGenerationLength: Yup.number().when('accountType', {
			is: "provision",
			then: (schema) => schema.min(8).max(255).required('Password generation length is required'),
			otherwise: (schema) => schema.notRequired(),
		}),
	});

  const [accountType, setAccountType] = useState('provision');
  const [generatedPassword, setGeneratedPassword] = useState('');

	const { hasCopied, onCopy } = useClipboard(generatedPassword);

	const generatePassword = (length: number) => {
		const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		const specialCharacters = '!@#$%^&*()_-+=<>?';
		const allCharacters = charset + specialCharacters;
		let password = '';
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * allCharacters.length);
			password += allCharacters[randomIndex];
		}
		setGeneratedPassword(password);
	};
  
  useEffect(() => {
    generatePassword(15);
  }, []);
  
  return (
		<Formik
      initialValues={{
        email: '',
        name: '',
				role: 'competitor',
        school: 'ZSEL',
        accountType: 'provision',
        password: '',
        confirmPassword: '',
				passwordGenerationLength: 15,
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        const newUser = {
          email: values.email,
          name: values.name,
          role: values.role,
          school: values.school,
          isReRegistered: values.accountType === "static" ? true : false,
          password: values.accountType === "static" ? values.password : generatedPassword,
        };

        const response = await fetch(`/api/auth/register`, {
          method: "POST",
          body: JSON.stringify(newUser),
        });
    
        const data = await response.json();
    
        if (data.error) {
          console.error(data.error);
        }
    
        console.log("Account created!");
      }}
    >
      {({ values, errors, touched, setFieldValue, isSubmitting }) => (
        <Form className='min-w-[150px] w-full max-w-[350px] space-y-2'>
          <Field name="email">
            {({ field }: any) => (
              <FormControl isInvalid={!!(errors.email && touched.email)}>
                <FormLabel>Email</FormLabel>
                <Input {...field} type="email" placeholder="Enter your email" />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="name">
            {({ field }: any) => (
              <FormControl isInvalid={!!(errors.name && touched.name)} >
                <FormLabel>Imię</FormLabel>
                <Input {...field} type="text" placeholder="Enter your name" />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <div className='flex gap-2'>
            <Field name="role">
              {({ field }: any) => (
                <FormControl mt={4} isInvalid={!!(errors.role && touched.role)}>
                  <FormLabel>Rola</FormLabel>
                  <Select 
                    {...field} 
                    value={values.role}
                    placeholder="Wybierz role"
                  >
                    <option value="competitor">Competitor</option>
                    <option value="moderator">Moderator</option>
                    <option value="admin">Admin</option>
                  </Select>
                  <FormErrorMessage>{errors.role}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="school">
              {({ field }: any) => (
                <FormControl mt={4} isInvalid={!!(errors.school && touched.school)}>
                  <FormLabel>Szkoła</FormLabel>
                  <Select 
                    {...field} 
                    value={values.school}
                    placeholder="Wybierz szkołe"
                  >
                    <option value="ZSEL">ZSEL</option>
                    <option value="VLO">VLO</option>
                    <option value="IILO">IILO</option>
                  </Select>
                  <FormErrorMessage>{errors.school}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </div>
          <Field name="accountType">
            {({ field }: any) => (
              <FormControl isInvalid={!!(errors.accountType && touched.accountType)} mt={4}>
                <FormLabel>Account Type</FormLabel>
                <RadioGroup
                  {...field}
                  value={values.accountType}
                  onChange={(value) => {
                    setFieldValue('accountType', value);
                    setAccountType(value);
                  }}
                >
                  <Stack direction="row">
                    <Radio value="provision">Provision</Radio>
                    <Radio value="static">Static</Radio>
                  </Stack>
                </RadioGroup>
                <FormErrorMessage>{errors.accountType}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          {accountType === 'provision' && (
						<>
              <Field name="passwordGenerationLength">
                {({ field }: any) => (
                  <FormControl
                    isInvalid={!!(errors.passwordGenerationLength && touched.passwordGenerationLength)}
                    mt={4}
                  >
                    <FormLabel>Password Generation Length</FormLabel>
										<NumberInput
											defaultValue={15}
											min={8}
											max={255}
											value={field.value}
											onChange={(value) => setFieldValue(field.name, value)}
										>
											<NumberInputField {...field} />
											<NumberInputStepper>
												<NumberIncrementStepper />
												<NumberDecrementStepper />
											</NumberInputStepper>
										</NumberInput>
                    <FormErrorMessage>{errors.passwordGenerationLength}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Button
								type='button'
                mt={4}
                onClick={() => generatePassword(Number(values.passwordGenerationLength))}
              >
                Generate Password
              </Button>

              {generatedPassword && (
                <FormControl mt={4}>
								<FormLabel>Generated Password</FormLabel>
								<InputGroup>
									<Input value={generatedPassword} isReadOnly />
									<InputRightElement>
										<IconButton
											aria-label="Copy password"
											icon={<FiCopy />}
											onClick={onCopy}
										/>
									</InputRightElement>
								</InputGroup>
                {hasCopied && <Text color="green.500">Password copied!</Text>}
							</FormControl>
              )}
            </>
          )}

          {accountType === 'static' && (
            <>
              <Field name="password">
                {({ field }: any) => (
                  <FormControl isInvalid={!!(errors.password && touched.password)} mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input {...field} type="password" placeholder="Enter password" />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="confirmPassword">
                {({ field }: any) => (
                  <FormControl isInvalid={!!(errors.confirmPassword && touched.confirmPassword)} mt={4}>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input {...field} type="password" placeholder="Confirm password" />
                    <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </>
          )}

					<div className="py-7 flex justify-center">
            <Button
              isLoading={isSubmitting}
              type='submit'
              className='p-2 rounded-lg w-full shadow-lg shadow-violet-400/50'>
              Zarejestruj
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default RegisterForm