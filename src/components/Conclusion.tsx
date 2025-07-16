import React, { useEffect } from 'react';
import { Typography, Container, useTheme, Box, Grid, Paper } from '@mui/material';
import { motion, useInView, useAnimation } from 'framer-motion';

const Conclusion: React.FC = () => {
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

  const conclusionPoints = [
    "Improve product design and notification UX",
    "Build trust-based messaging",
    "Innovate beyond caller ID",
    "Reclaim relevance in a changing mobile world",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
      style={{ background: theme.palette.background.paper, padding: '80px 0', color: theme.palette.text.primary, position: 'relative', overflow: 'hidden' }} // White background
    >
      {/* New Animated Background Elements */}
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          width: '130px',
          height: '130px',
          borderRadius: '50%',
          background: 'rgba(0, 123, 255, 0.08)',
          filter: 'blur(45px)',
          zIndex: 0,
          top: '25%',
          left: '10%',
        }}
        animate={{ y: [0, 40, 0], x: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      />
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          borderRadius: '10px',
          background: 'rgba(255, 193, 7, 0.08)',
          filter: 'blur(40px)',
          zIndex: 0,
          bottom: '10%',
          right: '15%',
        }}
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 13, ease: "linear" }}
      />
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          width: '70px',
          height: '70px',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          background: 'rgba(0, 123, 255, 0.05)',
          filter: 'blur(30px)',
          zIndex: 0,
          top: '5%',
          right: '5%',
        }}
        animate={{ y: [0, -20, 0], rotate: [0, 180, 0] }}
        transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
      />

      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6, color: theme.palette.primary.dark }}>
          Conclusion
        </Typography>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="body1" paragraph align="center" sx={{ color: theme.palette.text.secondary }}>
            Truecaller sits at the intersection of utility and discomfort, it protects users but also raises silent anxiety around data and app behavior. Disguised research through MAXI allows uncovering these delicate insights helping Truecaller:
          </Typography>
        </motion.div>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {conclusionPoints.map((point, index) => (
            <Grid gridColumn={{ xs: 'span 12', sm: 'span 6' }} key={index} component="div">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper elevation={3} sx={{ p: 3, borderRadius: 2, background: theme.palette.primary.light, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="h6" align="center" sx={{ color: theme.palette.text.primary }}>
                    {point}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Typography variant="h5" align="center" sx={{ mt: 8, color: theme.palette.primary.dark }}>
            After all, isn’t everyone just trying to 'take the right call'!
          </Typography>
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

export default Conclusion;