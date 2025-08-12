import React, { useState } from 'react';
import { 
  Typography, 
  Box, 
  Button, 
  Card, 
  CardContent,
  TextField,
  LinearProgress,
  Chip,
  Avatar,
  Fab
} from '@mui/material';
import { 
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Send as SendIcon,
  Person as PersonIcon,
  Subject as SubjectIcon,
  Star as StarIcon,
  Code as CodeIcon,
  Web as WebIcon,
  KeyboardArrowUp as ArrowUpIcon,
  Build as BuildIcon,
  School as EducationIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import CustomGrid from '../components/CustomGrid';
import Navbar from '../components/Navbar';

const Landing = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box>
      {/* Responsive Navigation */}
      <Navbar scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <Box id="home" sx={{ pt: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box 
            sx={{ 
              textAlign: 'center', 
              py: 16,
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
              color: 'white',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Animated Background Elements */}
            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)',
              animation: 'pulse 4s ease-in-out infinite alternate'
            }} />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
                            <Box
                sx={{
                  width: 180,
                  height: 180,
                  mx: 'auto',
                  mb: 6,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: '4px solid rgba(255,255,255,0.3)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                  position: 'relative',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s ease-in-out',
                    boxShadow: '0 20px 45px rgba(0,0,0,0.4)'
                  }
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    fontSize: '4rem',
                    color: 'white',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    letterSpacing: '-3px',
                    lineHeight: 0.8
                  }}
                >
                  US
                </Typography>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography 
                variant="h1" 
                component="h1" 
                gutterBottom 
                sx={{ 
                  fontWeight: 800, 
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 4px 8px rgba(0,0,0,0.3)'
                }}
              >
                UTKARSH SRIVASTAV
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typography 
                variant="h3" 
                gutterBottom 
                sx={{ 
                  mb: 4, 
                  opacity: 0.95,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 600,
                  color: '#94a3b8'
                }}
              >
                Frontend Developer & UI/UX Designer
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 8, 
                  maxWidth: 900, 
                  mx: 'auto', 
                  opacity: 0.9, 
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  color: '#cbd5e1'
                }}
              >
                Passionate about creating clean, responsive, and scalable web applications. 
                Currently working as SDE I at IOPSHUB, specializing in React, TypeScript, and modern web technologies.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button 
                  variant="contained" 
                  size="large" 
                  startIcon={<EmailIcon />}
                  sx={{ 
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    px: 6,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '50px',
                    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
                    '&:hover': { 
                      background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 35px rgba(102, 126, 234, 0.6)'
                    },
                    transition: 'all 0.3s ease-in-out'
                  }}
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  startIcon={<LinkedInIcon />}
                  onClick={() => window.open('https://linkedin.com/in/utkarshsri112/', '_blank')}
                  sx={{ 
                    borderColor: 'rgba(255,255,255,0.3)', 
                    color: 'white',
                    px: 6,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '50px',
                    borderWidth: '2px',
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '&:hover': { 
                      borderColor: 'white', 
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  LinkedIn
                </Button>
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Box>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Box sx={{ py: 4, background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}>
          <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 4, color: 'white' }}>
              Quick Stats
            </Typography>
            <CustomGrid container spacing={2} justifyContent="center">
              <CustomGrid item xs={12} sm={6} md={3}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{ 
                    textAlign: 'center', 
                    p: 3, 
                    height: 200,
                    minHeight: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #353b31 0%, #515749 100%)',
                    color: 'white',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}>
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, color: 'white' }}>2+</Typography>
                    <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>Years Experience</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      Frontend Development & UI/UX Design
                    </Typography>
                  </Card>
                </motion.div>
              </CustomGrid>
              <CustomGrid item xs={12} sm={6} md={3}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{ 
                    textAlign: 'center', 
                    p: 3, 
                    height: 200,
                    minHeight: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                                            background: 'linear-gradient(135deg, #515749 0%, #565b54 100%)',
                    color: 'white',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}>
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, color: 'white' }}>10+</Typography>
                    <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>Projects Completed</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      Web Applications & Dashboards
                    </Typography>
                  </Card>
                </motion.div>
              </CustomGrid>
              <CustomGrid item xs={12} sm={6} md={3}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{ 
                    textAlign: 'center', 
                    p: 3, 
                    height: 200,
                    minHeight: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                                            background: 'linear-gradient(135deg, #565b54 0%, #34483f 100%)',
                    color: 'white',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}>
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, color: 'white' }}>15+</Typography>
                    <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>Technologies</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      React, TypeScript, Figma & More
                    </Typography>
                  </Card>
                </motion.div>
              </CustomGrid>
              <CustomGrid item xs={12} sm={6} md={3}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{ 
                    textAlign: 'center', 
                    p: 3, 
                    height: 200,
                    minHeight: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                                            background: 'linear-gradient(135deg, #34483f 0%, #555f56 100%)',
                    color: 'white',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}>
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, color: 'white' }}>100%</Typography>
                    <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>Responsive</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      Mobile-First Design
                    </Typography>
                  </Card>
                </motion.div>
              </CustomGrid>
            </CustomGrid>
          </Box>
        </Box>
      </motion.div>

      {/* About Section */}
      <Box id="about" sx={{ py: 8, background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6, color: 'white' }}>
              About Me
            </Typography>
            
            <Card sx={{ 
              p: 6, 
              mb: 6, 
              backgroundColor: 'rgba(255,255,255,0.05)', 
              backdropFilter: 'blur(10px)', 
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
                transform: 'translateY(-5px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }
            }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 4, color: 'white' }}>
                Professional Summary
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#e2e8f0' }}>
                Frontend Developer with a strong focus on building clean, responsive, and scalable web applications. 
                Currently working as an SDE I at IOPSHUB, where I design and develop enterprise-grade dashboards 
                for the Syneriq SaaS platform using React, TypeScript, and Vite.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#e2e8f0' }}>
                Experienced in creating intuitive UI/UX designs with Figma, translating them into production-ready code. 
                Previously led the design and development of the Syneriq.io website during a training program. 
                Proficient in Git for version control and collaborative development.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#e2e8f0' }}>
                Passionate about delivering user-centric solutions that drive performance and usability.
              </Typography>
            </Card>

            <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                style={{ flex: '0 1 400px', maxWidth: '400px' }}
              >
                <Card sx={{ 
                  p: 4, 
                  height: '100%', 
                  backgroundColor: 'rgba(255,255,255,0.05)', 
                  backdropFilter: 'blur(10px)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  color: 'white',
                  transition: 'all 0.3s ease-in-out',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.4)'
                  }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box sx={{ 
                      backgroundColor: 'rgba(255,255,255,0.2)', 
                      borderRadius: 2, 
                      p: 1, 
                      mr: 2,
                      transition: 'all 0.3s ease-in-out'
                    }}>
                      <EducationIcon sx={{ fontSize: 40, color: 'white' }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                      Education
                    </Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'white' }}>
                    B-Tech, Computer Science & Engineering
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 1 }}>
                    ITS Engineering College, Greater Noida, India
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}>
                    June 2024 • 72%
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Chip 
                      label="Computer Science" 
                      size="small" 
                      sx={{ 
                        backgroundColor: 'rgba(255,255,255,0.2)', 
                        color: 'white',
                        border: '1px solid rgba(255,255,255,0.3)'
                      }} 
                    />
                    <Chip 
                      label="Engineering" 
                      size="small" 
                      sx={{ 
                        backgroundColor: 'rgba(255,255,255,0.2)', 
                        color: 'white',
                        border: '1px solid rgba(255,255,255,0.3)'
                      }} 
                    />
                  </Box>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                style={{ flex: '0 1 400px', maxWidth: '400px' }}
              >
                <Card sx={{ 
                  p: 4, 
                  height: '100%', 
                  backgroundColor: 'rgba(255,255,255,0.05)', 
                  backdropFilter: 'blur(10px)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  color: 'white',
                  transition: 'all 0.3s ease-in-out',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.4)'
                  }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box sx={{ 
                      backgroundColor: 'rgba(255,255,255,0.2)', 
                      borderRadius: 2, 
                      p: 1, 
                      mr: 2,
                      transition: 'all 0.3s ease-in-out'
                    }}>
                      <StarIcon sx={{ fontSize: 40, color: 'white' }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                      Certifications
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" sx={{ mb: 1, color: 'white' }}>
                      • Frontend Development (Udemy)
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1, color: 'white' }}>
                      • JAVA Programming (Udemy)
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1, color: 'white' }}>
                      • Master in C Programming (Udemy)
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1, color: 'white' }}>
                      • Data Analytics & Visualization (Accenture)
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Box>

      {/* Experience Section */}
      <Box id="experience" sx={{ py: 8, background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6, color: 'white' }}>
              Work Experience
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {/* First Row - 2 Cards */}
              <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 500px', maxWidth: '500px' }}
                >
                  <Card sx={{ p: 4, height: '100%', background: 'linear-gradient(135deg, #5d5e59 0%, #635f73 100%)', color: 'white' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: 'white' }}>
                          SDE I
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'white' }}>
                          IOPSHUB
                        </Typography>
                      </Box>
                      <Chip label="Present" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                    </Box>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 1 }}>
                      April 1, 2025 – Present
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3 }}>
                      Tech Stack: React.js, TypeScript, AI integration tools
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'white' }}>
                      Leading front-end development of enterprise cloud optimization dashboards, 
                      including modules for Cost Optimization, Inventory Management, EC2, EBS, EKS, S3, and Scheduling.
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'white' }}>
                      Focused on building clean, modular, and scalable components using React.js with TypeScript, 
                      ensuring intuitive and responsive user interfaces tailored for operational efficiency.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip label="React.js" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                      <Chip label="TypeScript" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                      <Chip label="AI Integration" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                      <Chip label="Enterprise Dashboards" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                      <Chip label="AWS Services" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                    </Box>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 500px', maxWidth: '500px' }}
                >
                  <Card sx={{ p: 4, height: '100%', background: 'linear-gradient(135deg, #635f73 0%, #3e4243 100%)', color: 'white' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: 'white' }}>
                          UI/UX Design Intern
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'white' }}>
                          Khan Global Studies
                        </Typography>
                      </Box>
                      <Chip label="Offline" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                    </Box>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 1 }}>
                      April 2024 – January 2025
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'white' }}>
                      Designed multiple user interfaces and experiences for web platforms, 
                      with strong emphasis on user-centered design principles.
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'white' }}>
                      Collaborated closely with development teams to bring responsive and visually engaging 
                      website designs to life, ensuring they aligned with both user needs and business goals.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip label="UI/UX Design" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                      <Chip label="User Research" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                      <Chip label="Prototyping" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                      <Chip label="Design Systems" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                      <Chip label="Figma" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                    </Box>
                  </Card>
                </motion.div>
              </Box>

              {/* Second Row - 2 Cards */}
              <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 500px', maxWidth: '500px' }}
                >
                  <Card sx={{ p: 4, height: '100%', background: 'linear-gradient(135deg, #3e4243 0%, #464644 100%)', color: 'white' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: 'white' }}>
                          Training
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'white' }}>
                          IOPSHUB
                        </Typography>
                      </Box>
                      <Chip label="Offline" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                    </Box>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 1 }}>
                      February 2025 – March 2025
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'white' }}>
                      Led the design and development of the official website for Syneriq.io, a cutting-edge SaaS platform 
                      focused on AI-driven Governance, Risk & Compliance (GRC), intelligent Asset & Inventory Management.
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'white' }}>
                      Designed the complete user experience and interface using Figma, ensuring a modern, intuitive, 
                      and responsive design tailored to enterprise needs.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip label="React.js" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                      <Chip label="Figma" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                      <Chip label="SaaS Platform" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                      <Chip label="Enterprise Design" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                    </Box>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 500px', maxWidth: '500px' }}
                >
                  <Card sx={{ p: 4, height: '100%', background: 'linear-gradient(135deg, #464644 0%, #5d5e59 100%)', color: 'white' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: 'white' }}>
                          Intern
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'white' }}>
                          Mars Vision Pvt Ltd
                        </Typography>
                      </Box>
                      <Chip label="Online" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                    </Box>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 1 }}>
                      April 2022 – June 2022
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'white' }}>
                      Wrote custom HTML and JavaScript for existing websites. Documented project changes in team manuals 
                      for future reference and use.
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'white' }}>
                      Attended development programs to gain competencies and boost skills set. Used content creation tools 
                      and digital media to design web sites.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip label="HTML" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                      <Chip label="JavaScript" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                      <Chip label="Web Development" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                      <Chip label="Documentation" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                    </Box>
                  </Card>
                </motion.div>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Box>

      {/* Skills Section */}
      <Box id="skills" sx={{ py: 8, background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6, color: 'white' }}>
              Skills & Expertise
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {/* First Row - 2 Cards */}
              <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 500px', maxWidth: '500px' }}
                >
                  <Card sx={{ height: '100%', p: 3, background: 'linear-gradient(135deg, #353b31 0%, #515749 100%)', color: 'white' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{ 
                        color: 'white', 
                        mr: 2,
                        p: 1,
                        borderRadius: 2,
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        opacity: 0.8
                      }}>
                        <CodeIcon sx={{ fontSize: 40 }} />
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                        Frontend Development
                      </Typography>
                    </Box>
                    
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>React.js</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>90%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={90} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>TypeScript</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>85%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={85} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>JavaScript</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>90%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={90} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>HTML5/CSS3</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>95%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={95} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>Vite</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>80%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={80} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>Bootstrap</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>85%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={85} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>Tailwind CSS</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>82%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={82} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 500px', maxWidth: '500px' }}
                >
                  <Card sx={{ height: '100%', p: 3, background: 'linear-gradient(135deg, #565b54 0%, #34483f 100%)', color: 'white' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{ 
                        color: 'white', 
                        mr: 2,
                        p: 1,
                        borderRadius: 2,
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        opacity: 0.8
                      }}>
                        <BuildIcon sx={{ fontSize: 40 }} />
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                        UI/UX Design
                      </Typography>
                    </Box>
                    
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>Figma</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>88%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={88} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>Adobe XD</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>75%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={75} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>Prototyping</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>85%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={85} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>Wireframing</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>90%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={90} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>Responsive Design</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>92%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={92} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>User Research</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>80%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={80} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
              </Box>

              {/* Second Row - 2 Cards */}
              <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 500px', maxWidth: '500px' }}
                >
                  <Card sx={{ height: '100%', p: 3, background: 'linear-gradient(135deg, #34483f 0%, #555f56 100%)', color: 'white' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{ 
                        color: 'white', 
                        mr: 2,
                        p: 1,
                        borderRadius: 2,
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        opacity: 0.8
                      }}>
                        <GitHubIcon sx={{ fontSize: 40 }} />
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                        Tools & Version Control
                      </Typography>
                    </Box>
                    
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>Git</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>85%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={85} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>GitHub</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>88%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={88} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>VS Code</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>90%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={90} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>Chrome DevTools</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>85%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={85} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 500px', maxWidth: '500px' }}
                >
                  <Card sx={{ height: '100%', p: 3, background: 'linear-gradient(135deg, #555f56 0%, #353b31 100%)', color: 'white' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{ 
                        color: 'white', 
                        mr: 2,
                        p: 1,
                        borderRadius: 2,
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        opacity: 0.8
                      }}>
                        <WebIcon sx={{ fontSize: 40 }} />
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                        Programming Languages
                      </Typography>
                    </Box>
                    
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>Java (OOPs)</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>85%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={85} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>C Programming</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>80%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={80} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>REST APIs</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>85%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={85} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>Axios</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>82%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={82} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>React Hooks</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>88%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={88} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>React Router</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>85%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={85} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Box>

      {/* Projects Section */}
      <Box id="projects" sx={{ py: 8, background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6, color: 'white' }}>
              Projects & Portfolio
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {/* First Row - 3 Cards */}
              <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 350px', maxWidth: '350px' }}
                >
                  <Card sx={{ height: '100%', background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', color: 'white', '&:hover': { transform: 'translateY(-5px)', transition: 'transform 0.3s ease-in-out' } }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Chip 
                          label="Web Application" 
                          size="small" 
                          sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
                        />
                      </Box>
                      
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'white', mb: 2 }}>
                        NEWSHUB
                      </Typography>
                      
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3, lineHeight: 1.6 }}>
                        A comprehensive news website that displays daily news with modern design and functionality.
                      </Typography>

                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 500, mb: 2, color: 'white' }}>
                          Technologies:
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          <Chip label="React.js" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                          <Chip label="API Integration" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                          <Chip label="Bootstrap" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                          <Chip label="News API" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 350px', maxWidth: '350px' }}
                >
                  <Card sx={{ height: '100%', background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', color: 'white', '&:hover': { transform: 'translateY(-5px)', transition: 'transform 0.3s ease-in-out' } }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Chip 
                          label="Portfolio Website" 
                          size="small" 
                          sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
                        />
                      </Box>
                      
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'white', mb: 2 }}>
                        PORTFOLIO
                      </Typography>
                      
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3, lineHeight: 1.6 }}>
                        A modern frontend portfolio showcasing skills, projects, and contact information.
                      </Typography>

                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 500, mb: 2, color: 'white' }}>
                          Technologies:
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          <Chip label="React.js" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                          <Chip label="TypeScript" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                          <Chip label="Material-UI" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                          <Chip label="Framer Motion" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 350px', maxWidth: '350px' }}
                >
                  <Card sx={{ height: '100%', background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', color: 'white', '&:hover': { transform: 'translateY(-5px)', transition: 'transform 0.3s ease-in-out' } }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Chip 
                          label="Enterprise Dashboard" 
                          size="small" 
                          sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
                        />
                      </Box>
                      
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'white', mb: 2 }}>
                        ENTERPRISE DASHBOARDS
                      </Typography>
                      
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3, lineHeight: 1.6 }}>
                        Cloud optimization dashboards for Cost Optimization, Inventory Management, and Scheduling.
                      </Typography>

                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 500, mb: 2, color: 'white' }}>
                          Technologies:
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          <Chip label="React.js" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                          <Chip label="TypeScript" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                          <Chip label="AI Integration" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                          <Chip label="AWS Services" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>

              {/* Second Row - 3 Cards */}
              <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 350px', maxWidth: '350px' }}
                >
                  <Card sx={{ height: '100%', background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', color: 'white', '&:hover': { transform: 'translateY(-5px)', transition: 'transform 0.3s ease-in-out' } }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Chip 
                          label="Java Project" 
                          size="small" 
                          sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
                        />
                      </Box>
                      
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'white', mb: 2 }}>
                        PIZZA BILL GENERATOR
                      </Typography>
                      
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3, lineHeight: 1.6 }}>
                        A simple JAVA project based on concept of OOPs for generating pizza bills.
                      </Typography>

                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 500, mb: 2, color: 'white' }}>
                          Technologies:
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          <Chip label="Java" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                          <Chip label="OOPs" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                          <Chip label="Console Application" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 350px', maxWidth: '350px' }}
                >
                  <Card sx={{ height: '100%', background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', color: 'white', '&:hover': { transform: 'translateY(-5px)', transition: 'transform 0.3s ease-in-out' } }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Chip 
                          label="SaaS Platform" 
                          size="small" 
                          sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
                        />
                      </Box>
                      
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'white', mb: 2 }}>
                        SYNERIQ.IO
                      </Typography>
                      
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3, lineHeight: 1.6 }}>
                        AI-driven Governance, Risk & Compliance (GRC) platform with intelligent Asset & Inventory Management.
                      </Typography>

                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 500, mb: 2, color: 'white' }}>
                          Technologies:
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          <Chip label="React.js" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                          <Chip label="Figma" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                          <Chip label="SaaS Platform" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                          <Chip label="Enterprise Design" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 350px', maxWidth: '350px' }}
                >
                  <Card sx={{ height: '100%', background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', color: 'white', '&:hover': { transform: 'translateY(-5px)', transition: 'transform 0.3s ease-in-out' } }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Chip 
                          label="Government Internship" 
                          size="small" 
                          sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
                        />
                      </Box>
                      
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'white', mb: 2 }}>
                        INTERACTIVE WEBSITES
                      </Typography>
                      
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3, lineHeight: 1.6 }}>
                        Created interactive websites like portfolio website, temperature website using frontend development.
                      </Typography>

                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 500, mb: 2, color: 'white' }}>
                          Technologies:
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          <Chip label="Frontend Development" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                          <Chip label="HTML/CSS" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                          <Chip label="JavaScript" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                          <Chip label="Interactive Design" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 8, background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6, color: 'white' }}>
              Get In Touch
            </Typography>
            <Box sx={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'stretch' }}>
              {/* Contact Information */}
              <Box sx={{ flex: '0 1 400px' }}>
                <Card sx={{ p: 4, height: '100%', backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 4, color: 'white' }}>
                    Contact Information
                  </Typography>
                  
                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{ 
                        mr: 3,
                        p: 2,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 60,
                        height: 60
                      }}>
                        <PhoneIcon sx={{ fontSize: 28, color: '#90caf9' }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
                          Phone
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#cbd5e1' }}>
                          08009960930
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{ 
                        mr: 3,
                        p: 2,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 60,
                        height: 60
                      }}>
                        <EmailIcon sx={{ fontSize: 28, color: '#f48fb1' }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
                          Email
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#cbd5e1' }}>
                          utkarshsri288@gmail.com
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{ 
                        mr: 3,
                        p: 2,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 60,
                        height: 60
                      }}>
                        <LocationIcon sx={{ fontSize: 28, color: '#81c784' }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
                          Location
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#cbd5e1' }}>
                          Greater Noida, India 201310
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{ 
                        mr: 3,
                        p: 2,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 60,
                        height: 60
                      }}>
                        <LinkedInIcon sx={{ fontSize: 28, color: '#64b5f6' }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
                          LinkedIn
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#cbd5e1' }}>
                          linkedin.com/in/utkarshsri112/
                        </Typography>
                      </Box>
                    </Box>
                  </Box>


                </Card>
              </Box>

                            {/* Contact Form */}
              <Box sx={{ flex: '1 1 500px' }}>
                <Card sx={{ p: 4, backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 4, color: 'white' }}>
                    Contact Form
                  </Typography>
                  
                  <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          sx={{ flex: '1 1 200px' }}
                          InputProps={{
                            startAdornment: <PersonIcon sx={{ mr: 1, color: 'text.secondary' }} />
                          }}
                        />
                        
                        <TextField
                          fullWidth
                          label="Your Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          sx={{ flex: '1 1 200px' }}
                          InputProps={{
                            startAdornment: <EmailIcon sx={{ mr: 1, color: 'text.secondary' }} />
                          }}
                        />
                      </Box>
                      
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        InputProps={{
                          startAdornment: <SubjectIcon sx={{ mr: 1, color: 'text.secondary' }} />
                        }}
                      />
                      
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell me about your project or how I can help you..."
                      />
                      
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        startIcon={<SendIcon />}
                        sx={{ 
                          py: 2,
                          px: 4,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          borderRadius: '50px',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
                          border: 'none',
                          textTransform: 'none',
                          letterSpacing: '0.5px',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 12px 35px rgba(102, 126, 234, 0.6)',
                            transition: 'all 0.3s ease-in-out'
                          },
                          '&:active': {
                            transform: 'translateY(0px)',
                            boxShadow: '0 6px 20px rgba(102, 126, 234, 0.5)'
                          },
                          transition: 'all 0.3s ease-in-out'
                        }}
                      >
                        Send Message
                      </Button>
                    </Box>
                  </form>
                </Card>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Box>

      {/* Scroll to Top Button */}
      <Fab
        color="primary"
        aria-label="scroll to top"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUpIcon />
      </Fab>
    </Box>
  );
};

export default Landing;
