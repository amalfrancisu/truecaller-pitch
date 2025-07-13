import React, { useEffect, useRef } from 'react';
import { Typography, Container, Box, Link, useTheme } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion, useInView, useAnimation } from 'framer-motion';

const Contact: React.FC = () => {
  const theme = useTheme();
  const svgRef = useRef(null);
  const inView = useInView(svgRef, { once: false, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ pathLength: 1 });
    } else {
      controls.start({ pathLength: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3 }}
      style={{ background: theme.palette.background.paper, padding: '80px 0', color: theme.palette.text.primary, position: 'relative', overflow: 'hidden' }} // White background
    >
      {/* New Animated Background Elements */}
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          background: 'rgba(0, 123, 255, 0.08)',
          filter: 'blur(35px)',
          zIndex: 0,
          top: '10%',
          left: '10%',
        }}
        animate={{ y: [0, 30, 0], x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          width: '80px',
          height: '80px',
          borderRadius: '10px',
          background: 'rgba(255, 193, 7, 0.08)',
          filter: 'blur(30px)',
          zIndex: 0,
          bottom: '5%',
          right: '5%',
        }}
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 11, ease: "linear" }}
      />
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          width: '90px',
          height: '90px',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          background: 'rgba(0, 123, 255, 0.05)',
          filter: 'blur(25px)',
          zIndex: 0,
          top: '70%',
          left: '20%',
        }}
        animate={{ y: [0, -20, 0], rotate: [0, 180, 0] }}
        transition={{ repeat: Infinity, duration: 13, ease: "easeInOut" }}
      />

      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6, color: theme.palette.primary.dark }}>
          Contact Us
        </Typography>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <Link href="mailto:maxi@xlri.ac.in" color="inherit" sx={{ textDecoration: 'none' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 1.5, borderRadius: 2, background: theme.palette.primary.light, boxShadow: '0 4px 12px rgba(0,0,0,0.08)', transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                <EmailIcon sx={{ fontSize: 30, color: theme.palette.primary.main }} />
                <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>maxi@xlri.ac.in</Typography>
              </Box>
            </Link>
            <Link href="tel:+919876543210" color="inherit" sx={{ textDecoration: 'none' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 1.5, borderRadius: 2, background: theme.palette.primary.light, boxShadow: '0 4px 12px rgba(0,0,0,0.08)', transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                <PhoneIcon sx={{ fontSize: 30, color: theme.palette.primary.main }} />
                <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>+91 98765 43210</Typography>
              </Box>
            </Link>
          </Box>
        </motion.div>
      </Container>
      {/* Animated Border */}
      <motion.svg
        ref={svgRef}
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 0 L100 0 L100 100 L0 100 L0 0"
          stroke={theme.palette.primary.main}
          strokeWidth="2"
          fill="none"
          animate={controls}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default Contact;