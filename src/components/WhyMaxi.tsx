import React, { forwardRef, useEffect } from 'react';
import { Typography, Container, List, ListItem, ListItemText, useTheme, Paper, Box } from '@mui/material';
import { motion, useInView, useAnimation } from 'framer-motion';

interface WhyMaxiProps {
  // No specific props needed for now, but keeping the interface for consistency
}

const WhyMaxi = forwardRef<HTMLDivElement, WhyMaxiProps>((props, ref) => {
  const theme = useTheme();
  const svgRef = React.useRef(null);
  const inView = useInView(svgRef, { once: false, amount: 0.5 }); // Detect when 50% of SVG is in view
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
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{ background: theme.palette.background.paper, padding: '80px 0', color: theme.palette.text.primary, position: 'relative', overflow: 'hidden' }} // White background
    >
      {/* Animated Truecaller Logos (Translucent) */}
      {[...Array(50)].map((_, i) => (
        <Box
          key={i}
          component={motion.img}
          src="/truelogo.png"
          alt="Truecaller Logo"
          sx={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            opacity: 0.05 + (i * 0.0001), // Very low opacity
            zIndex: 0,
          }}
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}%`,
            scale: 0.3 + (Math.random() * 0.4),
          }}
          animate={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}%`,
            scale: 0.3 + (Math.random() * 0.4),
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 30 + (Math.random() * 20), // Slower duration
            ease: "linear",
          }}
        />
      ))}

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
          top: '20%',
          right: '10%',
        }}
        animate={{ y: [0, 40, 0], x: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          width: '80px',
          height: '80px',
          borderRadius: '10px',
          background: 'rgba(255, 193, 7, 0.08)',
          filter: 'blur(25px)',
          zIndex: 0,
          bottom: '15%',
          left: '5%',
        }}
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      />
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          width: '60px',
          height: '60px',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          background: 'rgba(0, 123, 255, 0.05)',
          filter: 'blur(20px)',
          zIndex: 0,
          top: '50%',
          left: '30%',
        }}
        animate={{ y: [0, -20, 0], rotate: [0, 180, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6, color: theme.palette.primary.dark }}>
          Why MAXI RP for Truecaller?
        </Typography>
        <List>
          {[1, 2, 3, 4].map((itemNum, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Paper elevation={3} sx={{ mb: 3, p: 3, borderRadius: 2, borderLeft: `5px solid ${theme.palette.primary.main}`, background: theme.palette.primary.light }}>
                <ListItem disablePadding>
                  <ListItemText
                    primary={
                      <Typography variant="h6" component="h3" sx={{ color: theme.palette.text.primary }}>
                        {index === 0 && "1. Real User Behavior ≠ Claimed Behavior"}
                        {index === 1 && "2. Tackling Trust, Privacy, and App Fatigue"}
                        {index === 2 && "3. Cross-segment Expertise"}
                        {index === 3 && "4. Behavioral Insight, Not Just Feedback"}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                        {index === 0 && "The use of Truecaller is mostly passive; people don’t actively “choose” to use it daily. They simply rely on it in the background, often subconsciously. This makes direct research unreliable as users often under-report its value or pain points. Disguised research can help reveal what is missed out in surveys."}
                        {index === 1 && "In a world of growing privacy concerns and evolving spam, understanding how much users actually trust Truecaller and why they choose it or leave it needs subtle yet in-depth probing MAXI’s disguised formats are ideal for this."}
                        {index === 2 && "MAXI has access to both urban professionals and rural smartphone users. This aspect is critical for Truecaller, which serves both high-end Android users as well as feature-phone migrants on low-end smartphones."}
                        {index === 3 && "Our disguised research helps to uncover real motivations, fears, and choices that influence app uninstalls, notification opt-outs, and action/inaction on spam alerts."}
                      </Typography>
                    }
                  />
                </ListItem>
              </Paper>
            </motion.div>
          ))}
        </List>
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
});

export default WhyMaxi;