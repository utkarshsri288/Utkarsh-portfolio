import React from 'react';
import { 
  Typography, 
  Box, 
  Card, 
  CardContent,
  Chip
} from '@mui/material';
import CustomGrid from '../components/CustomGrid';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { 
  School as SchoolIcon,
  Work as WorkIcon,
  Star as StarIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box>
      {/* Professional Summary */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card sx={{ p: 4, mb: 6 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Professional Summary
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Full-Stack Engineer with a strong focus on building clean, responsive, and scalable digital products. 
            Currently working as an SDE I at IOPSHUB, where I build enterprise-grade dashboards, platform services, 
            automation workflows, and public-facing websites across the stack.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Experienced in creating intuitive UI/UX designs with Figma, translating them into production-ready code, 
            and connecting frontend experiences with backend services and cloud workflows. Built products including 
            release automation, report generation, control panel, PSAUX.ai, Actifyme, and IOPSHub experiences.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Passionate about delivering user-centric solutions that drive performance and usability.
          </Typography>
        </Card>
      </motion.div>

      {/* Education Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
          Education
        </Typography>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  B-Tech, Computer Science & Engineering
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  ITS Engineering College, Greater Noida, India
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  June 2024 • 72%
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Chip label="Computer Science" size="small" color="primary" sx={{ mr: 1 }} />
                  <Chip label="Engineering" size="small" color="primary" />
                </Box>
              </Card>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  12th Board
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Central Academy, Gorakhpur, India
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  March 2020 • 61% • CBSE Board
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Chip label="Mathematics" size="small" color="secondary" sx={{ mr: 1 }} />
                  <Chip label="Physics" size="small" color="secondary" sx={{ mr: 1 }} />
                  <Chip label="Chemistry" size="small" color="secondary" />
                </Box>
              </Card>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success">
                <SchoolIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  High School
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Prema Educational Academy, Mehdawal
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  March 2018 • 74% • CBSE Board
                </Typography>
              </Card>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
            Certifications
          </Typography>
          <CustomGrid container spacing={3}>
            <CustomGrid item xs={12} md={6}>
              <Card sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <StarIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Frontend Development
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Udemy Certification
                </Typography>
              </Card>
            </CustomGrid>
            <CustomGrid item xs={12} md={6}>
              <Card sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <StarIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    JAVA Programming
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Udemy Certification
                </Typography>
              </Card>
            </CustomGrid>
            <CustomGrid item xs={12} md={6}>
              <Card sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <StarIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Master in C Programming
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Udemy Certification
                </Typography>
              </Card>
            </CustomGrid>
            <CustomGrid item xs={12} md={6}>
              <Card sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <StarIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Data Analytics & Visualization
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Accenture North America • Forage
                </Typography>
              </Card>
            </CustomGrid>
          </CustomGrid>
        </Box>
      </motion.div>

      {/* Awards & Activities */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
            Awards & Activities
          </Typography>
          <CustomGrid container spacing={3}>
            <CustomGrid item xs={12} md={6}>
              <Card sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <WorkIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Organizer & Coordinator
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Annual Fest of ITS Engineering College
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Code-O-Fiesta Hackathon
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  E-sport Tournament
                </Typography>
              </Card>
            </CustomGrid>
            <CustomGrid item xs={12} md={6}>
              <Card sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <WorkIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Leadership Roles
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  President of Dominent Esport Club
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Organizer Certificate from College
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Team collaboration and project management
                </Typography>
              </Card>
            </CustomGrid>
          </CustomGrid>
        </Box>
      </motion.div>
    </Box>
  );
};

export default About;
