import React, { useEffect, useState } from 'react';
import { Typography, Container, Accordion, AccordionSummary, AccordionDetails, useTheme, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion, useInView, useAnimation } from 'framer-motion';

const problemStatements = [
  {
    title: 'Why do people ignore spam call alerts?',
    painPoint: 'Despite caller ID and spam warnings, many users still pick up scam/spam calls.',
    researchDesign: 'A decision-making game where users manage calls for a character running a business. Each call has ambiguous intent (e.g., unknown number with urgent message). This reveals how users weigh urgency vs risk—without knowing it’s about Truecaller.',
  },
  {
    title: 'Why do users uninstall or restrict background access?',
    painPoint: 'Many users disable background permissions or uninstall the app when battery or privacy concerns arise.',
    researchDesign: 'A simulation where users play the role of a phone reviewer trying to optimize a phone’s battery, privacy, and app usage. They must “fix” issues across multiple apps, revealing natural tendencies to restrict or kill apps like Truecaller.',
  },
  {
    title: 'How do users perceive privacy in a call-identification app?',
    painPoint: 'Truecaller accesses call logs, contacts, SMS (in some cases), leading to concerns about surveillance.',
    researchDesign: 'A social dilemma game about building a “smartphone of the future” where users trade-off between convenience and data sharing. This reveals real thresholds of discomfort, and what kind of messaging might ease concern.',
  },
  {
    title: 'Is Truecaller losing relevance in the era of WhatsApp, Telegram & Phone’s native dialer?',
    painPoint: 'With spam now shifting to WhatsApp or SMS, and better inbuilt dialers in modern phones, users are slowly disengaging.',
    researchDesign: 'A daily simulation where users handle all forms of communication (calls, SMS, WhatsApp) for a character, without seeing the “brand” Truecaller. Observing whether they naturally use an app like Truecaller (or prefer system apps) shows real stickiness.',
  },
  {
    title: 'Why do users turn off call alerts and floating windows?',
    painPoint: 'Truecaller’s core function requires screen overlays, but many find them intrusive or annoying and disable them.',
    researchDesign: 'Users take part in a UI/UX ‘judging panel’ for a fictional call management app. Their critique of overlays, permissions, and call alert design reveals honest friction points without being defensive (as in a direct feedback format).',
  },
];

const ProblemStatements: React.FC = () => {
  const theme = useTheme();
  const svgRef = React.useRef(null);
  const inView = useInView(svgRef, { once: false, amount: 0.5 });
  const controls = useAnimation();
  const [expanded, setExpanded] = useState<string | false>(false);

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
      transition={{ duration: 1, delay: 1 }}
      style={{ background: theme.palette.background.paper, padding: '80px 0', color: theme.palette.text.primary, position: 'relative', overflow: 'hidden' }} // White background
    >
      {/* New Animated Background Elements */}
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'rgba(0, 123, 255, 0.08)',
          filter: 'blur(40px)',
          zIndex: 0,
          top: '15%',
          left: '85%',
        }}
        animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          width: '90px',
          height: '90px',
          borderRadius: '10px',
          background: 'rgba(255, 193, 7, 0.08)',
          filter: 'blur(35px)',
          zIndex: 0,
          bottom: '20%',
          right: '5%',
        }}
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
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
          top: '5%',
          left: '5%',
        }}
        animate={{ y: [0, -20, 0], rotate: [0, 180, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6, color: theme.palette.primary.dark }}>
          Potential Problem Statements for Disguised Research
        </Typography>
        {problemStatements.map((statement, index) => (
          <Box
            key={index}
            component={motion.div}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={(event, isExpanded) => setExpanded(isExpanded ? `panel${index}` : false)}
              sx={{
                mb: 2,
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                '&:before': { display: 'none' }, // Remove default Accordion border
                '&:hover': { boxShadow: '0 6px 16px rgba(0,0,0,0.12)' },
                background: theme.palette.primary.light, // Pale blue for accordion
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.dark }} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  backgroundColor: theme.palette.primary.main, // Darker blue for summary
                  borderRadius: '8px 8px 0 0',
                  '&.Mui-expanded': { borderRadius: '8px 8px 0 0' },
                }}
              >
                <Typography variant="h6" sx={{ color: 'white' }}>{statement.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle1" component="h4" gutterBottom sx={{ color: theme.palette.primary.dark, mt: 2 }}>
                  Pain Point:
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ color: theme.palette.text.primary }}>
                  {statement.painPoint}
                </Typography>
                <Typography variant="subtitle1" component="h4" gutterBottom sx={{ color: theme.palette.primary.dark, mt: 2 }}>
                  Disguised Research Design:
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
                  {statement.researchDesign}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
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

export default ProblemStatements;