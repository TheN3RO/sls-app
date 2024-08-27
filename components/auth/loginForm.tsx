'use client';

import React, { useEffect, useState } from 'react'
import { Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const validationSchema = Yup.object({
		email: Yup.string().email('E-mail jest niepoprawny!').required('Hej, zapomniałeś podać e-maila!'),
		password: Yup.string().min(8, 'Hasło musi mieć co najmniej 8 znaków!').required('Bez hasła ani rusz!'),
	});

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  useEffect(() => {
    if (session?.user?.role === 'admin') {
      router.push('/dashboard/admin');
    } else if (session) {
      router.push('/dashboard/client');
    }
  }, [session, router]);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        const response = await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false,
        });
    
        if (response?.error) {
          actions.setErrors({ email: ' ', password: 'Niepoprawny e-mail lub hasło!' });
        }
      }}
    >
      {(props) => (
        <Form className='min-w-[150px] max-w-[350px]'>
          <Field name="email">
            {({ field, form }: { field: any; form: any }) => (
              <FormControl
                isInvalid={form.errors.email && form.touched.email}
                className="mb-2"
              >
                <FormLabel>Email</FormLabel>
                <Input {...field} type="email" placeholder='email@example.com'/>
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="password">
            {({ field, form }: { field: any; form: any }) => (
              <FormControl
                isInvalid={form.errors.password && form.touched.password}
                className="my-2"
              >
                <FormLabel>Hasło</FormLabel>
                <InputGroup size='md'>
                  <Input
                    {...field}
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Wpisz hasło'
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                      {show ? 'Ukryj' : 'Pokaż'}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                {/* <Input  type="password"/> */}
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <div className="my-7 flex justify-center">
            <Button
              isLoading={props.isSubmitting}
              type='submit'
              className='p-2 rounded-lg w-full shadow-lg shadow-violet-400/50'>
              Zaloguj się
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;