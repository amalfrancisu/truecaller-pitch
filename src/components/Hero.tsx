
import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  onDiscoverMoreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDiscoverMoreClick }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]); // Adjust 200 for desired parallax strength

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        background: 'linear-gradient(135deg, #0056b3 0%, #007BFF 100%)',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Parallax Background Layer */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(https://via.placeholder.com/1920x1080/007BFF/FFFFFF?text=Truecaller+Background)', // Placeholder image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: y, // Apply parallax effect
          zIndex: 0,
        }}
      />

      {/* SVG Animation */}
      <Box
        component={motion.svg}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          fill="rgba(255,255,255,0.05)"
          animate={{ cx: [200, 800, 200], cy: [200, 500, 200], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
        <motion.circle
          cx="800"
          cy="500"
          r="100"
          fill="rgba(255,255,255,0.03)"
          animate={{ cx: [800, 200, 800], cy: [500, 800, 500], scale: [1, 0.8, 1] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,0 C150,300 300,0 500,200 S850,700 1000,500 V0 H0 Z"
          fill="rgba(255,255,255,0.02)"
          animate={{ d: [
            "M0,0 C150,300 300,0 500,200 S850,700 1000,500 V0 H0 Z",
            "M0,0 C200,250 400,50 600,250 S900,600 1000,400 V0 H0 Z",
            "M0,0 C150,300 300,0 500,200 S850,700 1000,500 V0 H0 Z",
          ]}}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        />
      </Box>

      {/* Animated Truecaller Logos */}
      {[...Array(200)].map((_, i) => (
        <Box
          key={i}
          component={motion.img}
          src="/truelogo.png"
          alt="Truecaller Logo"
          sx={{
            position: 'absolute',
            width: '50px',
            height: '50px',
            opacity: 0.05 + (i * 0.0005), // Vary opacity slightly
            zIndex: 1,
          }}
          initial={{
            x: `${Math.random() * 200 - 100}vw`, // -100vw to 100vw
            y: `${Math.random() * 200 - 100}vh`, // -100vh to 100vh
            scale: 0.5 + (Math.random() * 0.5),
          }}
          animate={{
            x: `${Math.random() * 200 - 100}vw`, // -100vw to 100vw
            y: `${Math.random() * 200 - 100}vh`, // -100vh to 100vh
            scale: 0.5 + (Math.random() * 0.5),
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 20 + (Math.random() * 10), // Vary duration
            ease: "linear",
          }}
        />
      ))}

      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          zIndex: 2,
          py: 8, // Add some vertical padding
        }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Uncovering the Truth: Why Your Users Behave the Way They Do
          </Typography>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4 }}>
            A Disguised Research Proposal for <strong>Truecaller</strong> by <strong>MAXI XLRI</strong>
          </Typography>
        </motion.div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }} // More pronounced initial animation
          animate={{ scale: 1, opacity: 1 }} // Spring animation
          transition={{ delay: 1.2, duration: 0.6, type: "spring", stiffness: 120 }} // Spring animation
          whileHover={{ scale: 1.05, boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)' }} // Enhanced hover effect
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={onDiscoverMoreClick}
            sx={{
              padding: '12px 30px',
              borderRadius: '8px', // Rectangular shape with slight rounding
              fontWeight: 700,
              background: (theme) => `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.secondary.dark} 90%)`, // Gradient background
              color: (theme) => theme.palette.primary.main, // Text color
              transition: 'background 0.3s ease-in-out',
              '&:hover': {
                background: (theme) => `linear-gradient(45deg, ${theme.palette.secondary.dark} 30%, ${theme.palette.secondary.main} 90%)`,
                color: 'white',
              },
            }}
          >
            Explore Proposal
          </Button>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Hero;
