import React, { useRef } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

import Hero from './components/Hero';
import WhyMaxi from './components/WhyMaxi';
import ProblemStatements from './components/ProblemStatements'; // Re-add import
import Costing from './components/Costing';
import Conclusion from './components/Conclusion';
import Contact from './components/Contact';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007BFF', // Truecaller Blue
      light: '#BBDEFB', // Pale blue for elements
      dark: '#0056b3', // Darker blue for contrast
    },
    secondary: {
      main: '#E0E0E0', // Light grey for buttons
      dark: '#BDBDBD', // Darker grey for button hover
    },
    background: {
      default: '#f5f5f5', // Light grey for alternating sections
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121', // Dark text for light backgrounds
      secondary: '#424242', // Slightly lighter dark text
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontFamily: 'Montserrat, sans-serif',
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h3: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h5: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 500,
      fontSize: '1.5rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

const App: React.FC = () => {
  const whyMaxiRef = useRef<HTMLDivElement>(null);

  const handleDiscoverMoreClick = () => {
    whyMaxiRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        {/* Global Animated Background Elements (only the rotating one remains) */}
        <Box
          component={motion.div}
          sx={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'rgba(0, 123, 255, 0.03)',
            filter: 'blur(40px)',
            zIndex: -1,
            top: '50%',
            left: '20%',
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />

        <Hero onDiscoverMoreClick={handleDiscoverMoreClick} />
        <WhyMaxi ref={whyMaxiRef} />
        <ProblemStatements /> {/* Re-add the component */}
        <Costing />
        <Conclusion />
        <Contact />
      </Box>
    </ThemeProvider>
  );
};

export default App;
