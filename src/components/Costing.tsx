
import React, { useEffect } from 'react';
import { Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useTheme, Box } from '@mui/material';
import { motion, useInView, useAnimation } from 'framer-motion';

const Costing: React.FC = () => {
  const theme = useTheme();
  const svgRef = React.useRef(null);
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
      transition={{ duration: 1, delay: 1.5 }}
      style={{ background: theme.palette.background.paper, padding: '80px 0', color: theme.palette.text.primary, position: 'relative', overflow: 'hidden' }} // White background
    >
      {/* New Animated Background Elements */}
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'rgba(0, 123, 255, 0.08)',
          filter: 'blur(30px)',
          zIndex: 0,
          top: '5%',
          left: '15%',
        }}
        animate={{ y: [0, 30, 0], x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          width: '70px',
          height: '70px',
          borderRadius: '10px',
          background: 'rgba(255, 193, 7, 0.08)',
          filter: 'blur(25px)',
          zIndex: 0,
          bottom: '10%',
          right: '20%',
        }}
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          width: '80px',
          height: '80px',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          background: 'rgba(0, 123, 255, 0.05)',
          filter: 'blur(20px)',
          zIndex: 0,
          top: '70%',
          left: '5%',
        }}
        animate={{ y: [0, -20, 0], rotate: [0, 180, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6, color: theme.palette.primary.dark }}>
          Estimated Costing
        </Typography>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.08)', background: theme.palette.primary.light }}>
            <Table sx={{ minWidth: 650 }} aria-label="costing table">
              <TableHead>
                <TableRow sx={{ backgroundColor: theme.palette.primary.main }}>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Component</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Description</TableCell>
                  <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Estimated Cost (INR)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ '&:nth-of-type(odd)': { backgroundColor: theme.palette.primary.light } }}><TableCell component="th" scope="row" sx={{ color: theme.palette.text.primary }}>Design and development of disguised research modules</TableCell><TableCell sx={{ color: theme.palette.text.primary }}>Creation of 3 interactive research games</TableCell><TableCell align="right" sx={{ color: theme.palette.text.primary }}>₹ 1,20,000</TableCell></TableRow>
                <TableRow sx={{ '&:nth-of-type(odd)': { backgroundColor: theme.palette.primary.light } }}><TableCell component="th" scope="row" sx={{ color: theme.palette.text.primary }}>Raw materials and digital assets</TableCell><TableCell sx={{ color: theme.palette.text.primary }}>Visual, technical, and physical materials</TableCell><TableCell align="right" sx={{ color: theme.palette.text.primary }}>₹ 60,000</TableCell></TableRow>
                <TableRow sx={{ '&:nth-of-type(odd)': { backgroundColor: theme.palette.primary.light } }}><TableCell component="th" scope="row" sx={{ color: theme.palette.text.primary }}>Participant incentives</TableCell><TableCell sx={{ color: theme.palette.text.primary }}>500 participants × ₹150 each</TableCell><TableCell align="right" sx={{ color: theme.palette.text.primary }}>₹ 75,000</TableCell></TableRow>
                <TableRow sx={{ '&:nth-of-type(odd)': { backgroundColor: theme.palette.primary.light } }}><TableCell component="th" scope="row" sx={{ color: theme.palette.text.primary }}>Data cleaning, analysis, and reporting</TableCell><TableCell sx={{ color: theme.palette.text.primary }}>Post-survey processing and insights generation</TableCell><TableCell align="right" sx={{ color: theme.palette.text.primary }}>₹ 80,000</TableCell></TableRow>
                <TableRow sx={{ '& td, & th': { border: 0, backgroundColor: theme.palette.primary.main + ' !important' } }}><TableCell component="th" scope="row"><Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>Total Estimated Cost</Typography></TableCell><TableCell></TableCell><TableCell align="right"><Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>₹ 3,35,000</Typography></TableCell></TableRow>
              </TableBody>
            </Table>
          </TableContainer>
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

export default Costing;
