import React, { useState } from 'react';
import { registerUser } from '../../services/api';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Alert,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme'; // Importa o tema que você criou

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await registerUser({ name, email, password });
      setMessage('Registration successful');
      console.log(response.data);
    } catch (error) {
      setMessage('Registration failed');
      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: '20px', marginTop: '50px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Registrar
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box mb={2}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Registrar
            </Button>
          </form>
          {message && (
            <Box mt={2}>
              <Alert severity={message === 'Registration successful' ? 'success' : 'error'}>
                {message}
              </Alert>
            </Box>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
