import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul
      contrastText: '#ffffff', // Branco
    },
    secondary: {
      main: '#dc004e', // Vermelho
      contrastText: '#ffffff', // Branco
    },
    background: {
      default: '#f5f5f5', // Cinza claro para o fundo da página
      paper: '#ffffff', // Branco para papéis e cartões
    },
    text: {
      primary: '#FFFFFF', // Cor principal do texto
      secondary: '#666666', // Cor secundária do texto
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Tipografia padrão do MUI
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#ffffff',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#ffffff',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#ffffff',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.5,
      color: '#ffffff',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#FFFFFF',
    },
    button: {
      textTransform: 'none', // Remove a transformação para maiúsculas em botões
      fontWeight: 700,
      letterSpacing: '0.5px', // Espaçamento das letras
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#ff0023',
          borderRadius: '60px', // Borda arredondada para os botões
          padding: '10px 30px', // Aumenta o padding para um botão mais robusto
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra suave para destaque
          '&:hover': {
            boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)', // Sombra mais forte ao passar o mouse
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          color:'white',
          padding: '0.5px', // Aumenta o padding para mais espaço interno
          borderRadius: '16px', // Borda arredondada para papéis e cartões
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra suave para destaque
          backgroundColor: '#61605a', // Cor de fundo do papel
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '3px', // Margem vertical para espaçamento
          '& .MuiInputBase-root': {
            borderRadius: '8px', // Borda arredondada para os campos de entrada
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: '30px', // Borda arredondada para os alertas
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
