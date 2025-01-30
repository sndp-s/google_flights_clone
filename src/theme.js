import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a73e8', // Google's blue
    },
    secondary: {
      main: '#ff9800', // Accent color for highlights
    },
    background: {
      default: '#f8f9fa', // Light gray background
      paper: '#ffffff', // White cards
    },
    text: {
      primary: '#202124', // Google's default text color
      secondary: '#5f6368', // Lighter text
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    button: {
      textTransform: 'none', // No uppercase buttons
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Rounded buttons like Google UI
          padding: '10px 16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Slightly rounded cards
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          backgroundColor: '#fff',
        },
      },
    },
  },
});

export default theme;
