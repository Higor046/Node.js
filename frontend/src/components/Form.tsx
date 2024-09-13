import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import Button from './Button';
import { Box, Typography } from '@mui/material';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  password: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
});

const RegistrationForm: React.FC = () => {
  const initialValues: FormValues = { name: '', email: '', password: '' };

  const handleSubmit = (values: FormValues) => {
    console.log(values);
    // Aqui você pode fazer a chamada para a API de registro
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: 'auto',
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: '#ffffff',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Registrar
      </Typography>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ touched, errors }) => (
          <Form>
            <Box mb={2}>
              <Field name="name" as={Input} label="Nome" />
              <ErrorMessage name="name">
                {msg => <div style={{ color: 'red' }}>{msg}</div>}
              </ErrorMessage>
            </Box>
            <Box mb={2}>
              <Field name="email" as={Input} label="Email" type="email" />
              <ErrorMessage name="email">
                {msg => <div style={{ color: 'red' }}>{msg}</div>}
              </ErrorMessage>
            </Box>
            <Box mb={2}>
              <Field name="password" as={Input} label="Senha" type="password" />
              <ErrorMessage name="password">
                {msg => <div style={{ color: 'red' }}>{msg}</div>}
              </ErrorMessage>
            </Box>
            <Button type="submit">Registrar</Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default RegistrationForm;
