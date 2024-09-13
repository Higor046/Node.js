import React from 'react';
import { Container, Box, Typography, AppBar, Toolbar, Button } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ flex: 1, py: 4 }}>
        {children}
      </Container>
      <Box component="footer" sx={{ py: 2, backgroundColor: '#f4f4f4', textAlign: 'center' }}>
        <Typography variant="body2">DRE Contabil</Typography>
      </Box>
    </Box>
  );
};

export default Layout;
