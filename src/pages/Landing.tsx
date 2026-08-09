import React from 'react';
import { 
  Typography, 
  Box, 
  Button, 
  Card, 
  CardContent,
  LinearProgress,
  Chip,
  Fab
} from '@mui/material';
import { 
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Star as StarIcon,
  Code as CodeIcon,
  Web as WebIcon,
  KeyboardArrowUp as ArrowUpIcon,
  Build as BuildIcon,
  School as EducationIcon,
  Launch as LaunchIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import CustomGrid from '../components/CustomGrid';
import Navbar from '../components/Navbar';

const Landing = () => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
                SDE I · Freelance Full-Stack Engineer · UI/UX Designer
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
                I build full-stack products, platform services, and polished web experiences. My work brings together 
                frontend engineering, backend services, automation, cloud workflows, and thoughtful UI/UX to turn complex systems into clear experiences.
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
                  Hire Me Now
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
                    <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>Years Building</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      Full-stack engineering & SaaS delivery
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
                    <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>Enterprise Focus</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      SaaS platforms & cloud dashboards
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
                    <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>Languages & Tools</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      React, Java, REST APIs, AWS & Git
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
                    <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>Community</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      2K+ LinkedIn followers
                    </Typography>
                  </Card>
                </motion.div>
              </CustomGrid>
            </CustomGrid>
          </Box>
        </Box>
      </motion.div>

      {/* Services Section */}
      <Box id="services" sx={{ py: 8, background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6, color: 'white' }}>
              Freelance Full-Stack Services
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
                  <Card sx={{ 
                    height: '100%', 
                    p: 4, 
                    background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', 
                    color: 'white',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                    }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{ 
                        backgroundColor: 'rgba(255,255,255,0.2)', 
                        borderRadius: 2, 
                        p: 2, 
                        mr: 2
                      }}>
                        <CodeIcon sx={{ fontSize: 40, color: 'white' }} />
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                        Full-Stack Web Development
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
                      End-to-end web applications with responsive interfaces, backend services, authentication, APIs, databases, and production-ready integrations.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip label="React.js" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                      <Chip label="TypeScript" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                      <Chip label="REST APIs" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                      <Chip label="Databases" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                    </Box>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 350px', maxWidth: '350px' }}
                >
                  <Card sx={{ 
                    height: '100%', 
                    p: 4, 
                    background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', 
                    color: 'white',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                    }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{ 
                        backgroundColor: 'rgba(255,255,255,0.2)', 
                        borderRadius: 2, 
                        p: 2, 
                        mr: 2
                      }}>
                        <BuildIcon sx={{ fontSize: 40, color: 'white' }} />
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                        SaaS Tool Development
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
                      Build SaaS products from idea to deployment, including multi-page workflows, dashboards, admin panels, subscriptions, and internal tools.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip label="SaaS Platforms" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                      <Chip label="Admin Panels" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                      <Chip label="Cloud Workflows" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                    </Box>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 350px', maxWidth: '350px' }}
                >
                  <Card sx={{ 
                    height: '100%', 
                    p: 4, 
                    background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', 
                    color: 'white',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                    }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{ 
                        backgroundColor: 'rgba(255,255,255,0.2)', 
                        borderRadius: 2, 
                        p: 2, 
                        mr: 2
                      }}>
                        <WebIcon sx={{ fontSize: 40, color: 'white' }} />
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                        Backend & API Engineering
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
                      Design and connect reliable backend services, REST APIs, data workflows, release automation, report generation, and third-party integrations.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip label="Java" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                      <Chip label="REST APIs" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                      <Chip label="Automation" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                    </Box>
                  </Card>
                </motion.div>

              </Box>

              {/* Second Row - 2 Cards */}
              <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 350px', maxWidth: '350px' }}
                >
                  <Card sx={{ 
                    height: '100%', 
                    p: 4, 
                    background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', 
                    color: 'white',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                    }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{ 
                        backgroundColor: 'rgba(255,255,255,0.2)', 
                        borderRadius: 2, 
                        p: 2, 
                        mr: 2
                      }}>
                        <StarIcon sx={{ fontSize: 40, color: 'white' }} />
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                        EdTech & Business Tools
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
                      Digital tools for education, fitness, operations, and business workflows—from learning experiences to reporting and management systems.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip label="EdTech" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                      <Chip label="Business Workflows" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                      <Chip label="Custom Platforms" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                    </Box>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 350px', maxWidth: '350px' }}
                >
                  <Card sx={{ 
                    height: '100%', 
                    p: 4, 
                    background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', 
                    color: 'white',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                    }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{ 
                        backgroundColor: 'rgba(255,255,255,0.2)', 
                        borderRadius: 2, 
                        p: 2, 
                        mr: 2
                      }}>
                        <GitHubIcon sx={{ fontSize: 40, color: 'white' }} />
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                        Testing, Deployment & Support
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
                      Improve reliability with unit testing, API testing, bug fixing, deployment support, monitoring, performance improvements, and long-term maintenance.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip label="Unit Testing" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                      <Chip label="Deployment" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                      <Chip label="Monitoring" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                    </Box>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 350px', maxWidth: '350px' }}
                >
                  <Card sx={{ height: '100%', p: 4, background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', color: 'white', transition: 'all 0.3s ease-in-out', '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 2, p: 2, mr: 2 }}>
                        <WebIcon sx={{ fontSize: 40, color: 'white' }} />
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                        Landing Pages & Static Websites
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
                      High-converting landing pages, company websites, portfolio sites, and static marketing experiences with strong visual design and responsive performance.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip label="HTML/CSS" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                      <Chip label="React.js" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                      <Chip label="Figma Design" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                      <Chip label="SEO & Performance" size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                    </Box>
                  </Card>
                </motion.div>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Box>

      {/* Work Process Section */}
      <Box id="process" sx={{ py: 8, background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6, color: 'white' }}>
              How I Work
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {/* Process Steps */}
              <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 250px', maxWidth: '250px' }}
                >
                  <Card sx={{ 
                    height: '100%', 
                    p: 4, 
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', 
                    color: 'white',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                    }
                  }}>
                    <Box sx={{ 
                      width: 80, 
                      height: 80, 
                      borderRadius: '50%', 
                      backgroundColor: 'rgba(102, 126, 234, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3
                    }}>
                      <Typography variant="h3" sx={{ fontWeight: 800, color: '#667eea' }}>1</Typography>
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'white' }}>
                      Discovery & Planning
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                      We discuss your project requirements, goals, and timeline to create a detailed plan.
                    </Typography>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 250px', maxWidth: '250px' }}
                >
                  <Card sx={{ 
                    height: '100%', 
                    p: 4, 
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', 
                    color: 'white',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                    }
                  }}>
                    <Box sx={{ 
                      width: 80, 
                      height: 80, 
                      borderRadius: '50%', 
                      backgroundColor: 'rgba(102, 126, 234, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3
                    }}>
                      <Typography variant="h3" sx={{ fontWeight: 800, color: '#667eea' }}>2</Typography>
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'white' }}>
                      Design & Prototyping
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                      I create wireframes, mockups, and interactive prototypes to visualize your project.
                    </Typography>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 250px', maxWidth: '250px' }}
                >
                  <Card sx={{ 
                    height: '100%', 
                    p: 4, 
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', 
                    color: 'white',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                    }
                  }}>
                    <Box sx={{ 
                      width: 80, 
                      height: 80, 
                      borderRadius: '50%', 
                      backgroundColor: 'rgba(102, 126, 234, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3
                    }}>
                      <Typography variant="h3" sx={{ fontWeight: 800, color: '#667eea' }}>3</Typography>
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'white' }}>
                      Development
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                      Clean, responsive code development with regular updates and progress reports.
                    </Typography>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 250px', maxWidth: '250px' }}
                >
                  <Card sx={{ 
                    height: '100%', 
                    p: 4, 
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', 
                    color: 'white',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                    }
                  }}>
                    <Box sx={{ 
                      width: 80, 
                      height: 80, 
                      borderRadius: '50%', 
                      backgroundColor: 'rgba(102, 126, 234, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3
                    }}>
                      <Typography variant="h3" sx={{ fontWeight: 800, color: '#667eea' }}>4</Typography>
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'white' }}>
                      Testing & Launch
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                      Thorough testing, optimization, and deployment with ongoing support and maintenance.
                    </Typography>
                  </Card>
                </motion.div>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Box>

      {/* Pricing Section */}
      <Box id="pricing" sx={{ display: 'none' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 6, color: 'white' }}>
              Pricing Packages
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                style={{ flex: '0 1 350px', maxWidth: '350px' }}
              >
                <Card sx={{ 
                  height: '100%', 
                  p: 4, 
                  background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', 
                  color: 'white',
                  border: '2px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                    border: '2px solid rgba(102, 126, 234, 0.5)'
                  }
                }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center', mb: 2, color: 'white' }}>
                    Basic
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 800, textAlign: 'center', mb: 3, color: '#667eea' }}>
                    $200
                  </Typography>
                  <Typography variant="body2" sx={{ textAlign: 'center', mb: 4, color: 'rgba(255,255,255,0.8)' }}>
                    Perfect for small projects and startups
                  </Typography>
                  
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="body1" sx={{ mb: 2, color: 'white', display: 'flex', alignItems: 'center' }}>
                      ✓ Up to 5 pages
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'white', display: 'flex', alignItems: 'center' }}>
                      ✓ Responsive design
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'white', display: 'flex', alignItems: 'center' }}>
                      ✓ Basic animations
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'white', display: 'flex', alignItems: 'center' }}>
                      ✓ 2 revisions
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'white', display: 'flex', alignItems: 'center' }}>
                      ✓ 1 week delivery
                    </Typography>
                  </Box>
                  
                  <Button 
                    variant="outlined" 
                    fullWidth 
                    sx={{ 
                      borderColor: 'rgba(255,255,255,0.3)', 
                      color: 'white',
                      py: 1.5,
                      '&:hover': { 
                        borderColor: '#667eea',
                        backgroundColor: 'rgba(102, 126, 234, 0.1)'
                      }
                    }}
                    onClick={() => scrollToSection('contact')}
                  >
                    Get Started
                  </Button>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                style={{ flex: '0 1 350px', maxWidth: '350px' }}
              >
                <Card sx={{ 
                  height: '100%', 
                  p: 4, 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                  color: 'white',
                  border: '2px solid rgba(255,255,255,0.3)',
                  transform: 'scale(1.05)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05) translateY(-8px)',
                    boxShadow: '0 25px 50px rgba(102, 126, 234, 0.4)'
                  }
                }}>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Chip 
                      label="Most Popular" 
                      sx={{ 
                        backgroundColor: 'rgba(255,255,255,0.2)', 
                        color: 'white',
                        fontWeight: 600,
                        mb: 2
                      }} 
                    />
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center', mb: 2, color: 'white' }}>
                    Professional
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 800, textAlign: 'center', mb: 3, color: 'white' }}>
                    $700
                  </Typography>
                  <Typography variant="body2" sx={{ textAlign: 'center', mb: 4, color: 'rgba(255,255,255,0.9)' }}>
                    Ideal for growing businesses
                  </Typography>
                  
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="body1" sx={{ mb: 2, color: 'white', display: 'flex', alignItems: 'center' }}>
                      ✓ Up to 10 pages
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'white', display: 'flex', alignItems: 'center' }}>
                      ✓ Advanced animations
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'white', display: 'flex', alignItems: 'center' }}>
                      ✓ API integration
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'white', display: 'flex', alignItems: 'center' }}>
                      ✓ 5 revisions
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'white', display: 'flex', alignItems: 'center' }}>
                      ✓ 2 weeks delivery
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'white', display: 'flex', alignItems: 'center' }}>
                      ✓ 1 month support
                    </Typography>
                  </Box>
                  
                  <Button 
                    variant="contained" 
                    fullWidth 
                    sx={{ 
                      backgroundColor: 'white',
                      color: '#667eea',
                      py: 1.5,
                      fontWeight: 600,
                      '&:hover': { 
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                    onClick={() => scrollToSection('contact')}
                  >
                    Get Started
                  </Button>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                style={{ flex: '0 1 350px', maxWidth: '350px' }}
              >
                <Card sx={{ 
                  height: '100%', 
                  p: 4, 
                  background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)', 
                  color: 'white',
                  border: '2px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                    border: '2px solid rgba(102, 126, 234, 0.5)'
                  }
                }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center', mb: 2, color: 'white' }}>
                    Enterprise
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 800, textAlign: 'center', mb: 3, color: '#667eea' }}>
                    Custom
                  </Typography>
                  <Typography variant="body2" sx={{ textAlign: 'center', mb: 4, color: 'rgba(255,255,255,0.8)' }}>
                    For large-scale applications
                  </Typography>
                  
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="body1" sx={{ mb: 2, color: 'white', display: 'flex', alignItems: 'center' }}>
                      ✓ Unlimited pages
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'white', display: 'flex', alignItems: 'center' }}>
                      ✓ Custom features
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'white', display: 'flex', alignItems: 'center' }}>
                      ✓ Database integration
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'white', display: 'flex', alignItems: 'center' }}>
                      ✓ Unlimited revisions
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'white', display: 'flex', alignItems: 'center' }}>
                      ✓ Priority support
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'white', display: 'flex', alignItems: 'center' }}>
                      ✓ 3 months support
                    </Typography>
                  </Box>
                  
                  <Button 
                    variant="outlined" 
                    fullWidth 
                    sx={{ 
                      borderColor: 'rgba(255,255,255,0.3)', 
                      color: 'white',
                      py: 1.5,
                      '&:hover': { 
                        borderColor: '#667eea',
                        backgroundColor: 'rgba(102, 126, 234, 0.1)'
                      }
                    }}
                    onClick={() => scrollToSection('contact')}
                  >
                    Contact Me
                  </Button>
                </Card>
              </motion.div>

            </Box>
          </Box>
        </motion.div>
      </Box>

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
                Full-Stack Engineer with a strong focus on building clean, responsive, and scalable digital products. 
                I work across frontend experiences, backend services, automation, cloud workflows, and UI/UX to help teams 
                turn complex requirements into reliable products.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#e2e8f0' }}>
                With experience in both development and UI/UX design, I offer end-to-end solutions from concept to deployment. 
                My work includes platform services, enterprise dashboards, control panels, report generation, release automation, 
                and public-facing websites.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#e2e8f0' }}>
                Available for new projects and ready to help you bring your ideas to life with professional, 
                high-quality web applications.
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

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                style={{ flex: '0 1 400px', maxWidth: '400px' }}
              >
                <Card sx={{ p: 4, height: '100%', background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)', color: 'white', transition: 'all 0.3s ease-in-out', '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 25px 50px rgba(79,70,229,0.35)' } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box sx={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 2, p: 1, mr: 2 }}>
                      <StarIcon sx={{ fontSize: 40, color: 'white' }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                      Recognition
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'white', mb: 2 }}>
                    Developer Excellence Award
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.88)', lineHeight: 1.7 }}>
                    Recognized for technical contribution, ownership, problem-solving, and delivering reliable software products.
                  </Typography>
                </Card>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Box>

      {/* Experience Section */}
      <Box id="experience" sx={{ order: 4, py: 8, background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}>
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
                          IOPSHUB · New Delhi
                        </Typography>
                      </Box>
                      <Chip label="Present" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                    </Box>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 1 }}>
                      April 1, 2025 – Present
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3 }}>
                      Tech Stack: React.js, TypeScript, Django, Cypress, AWS, REST APIs
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'white' }}>
                      Full-Stack Developer building scalable, user-centric digital products across the stack.
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'white' }}>
                      At IOPSHub, I build React and TypeScript interfaces, Django backends, PSAUX, enterprise platform services, and Cypress test suites for reliable applications. Recognized with a Developer Excellence Award.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip label="React.js" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                      <Chip label="TypeScript" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                      <Chip label="Django" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                      <Chip label="Cypress" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                      <Chip label="REST APIs" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
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
      <Box id="skills" sx={{ order: 5, py: 8, background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}>
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
                        Frontend Engineering
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
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>HTML & CSS</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>95%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={95} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>Strapi</Typography>
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
                        UED & Product Design
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
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>User Interface Design</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>75%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={75} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>User Interface Prototyping</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>85%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={85} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>User Experience (UX)</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>90%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={90} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>Product Innovation</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>92%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={92} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>Figma</Typography>
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
                        Cloud, CI/CD & Messaging
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
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>Jenkins</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>88%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={88} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>AWS CodeDeploy</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>90%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={90} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>AWS Auto Scaling</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>85%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={85} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>RabbitMQ</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>80%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={80} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
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
                        Backend, APIs & Testing
                      </Typography>
                    </Box>
                    
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>Python</Typography>
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
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>Django REST Framework</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>82%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={82} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>Cypress.io</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>88%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={88} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>End-to-end Testing</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>85%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={85} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'white' }}>Automated Software Testing</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>80%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={80} sx={{ height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)', '& .MuiLinearProgress-bar': { backgroundColor: 'white' } }} />
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
      <Box id="projects" sx={{ order: 3, py: 8, background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 2, color: 'white' }}>
              Projects, Products & Portfolio
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', mb: 6, color: '#cbd5e1', maxWidth: 760, mx: 'auto', lineHeight: 1.7 }}>
              From cloud platforms and internal services to public-facing websites, I design and build complete digital products across the stack.
            </Typography>

            {/* Live Websites */}
            <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
              {[
                {
                  name: 'PSAUX.AI',
                  type: 'Live SaaS Website',
                  description: 'A cloud optimization platform combining AI-driven GRC, asset and inventory management, VAPT, and FinOps solutions.',
                  url: 'https://www.psaux.ai/',
                  technologies: ['React.js', 'TypeScript', 'AI Platform', 'Cloud Optimization']
                },
                {
                  name: 'ACTIFYME',
                  type: 'Live Product Website',
                  description: 'A sports and wellness event management platform created to support activity, participation, and event experiences.',
                  url: 'https://www.actifyme.fit/',
                  technologies: ['Web Development', 'Responsive UI', 'Product Experience']
                },
                {
                  name: 'IOPSHUB',
                  type: 'Live Company Website',
                  description: 'A cloud, DevOps, DevSecOps, InfoSec, data, modernization, and automation solutions website.',
                  url: 'https://www.iopshub.com/',
                  technologies: ['Cloud Solutions', 'DevOps', 'DevSecOps', 'Automation']
                }
              ].map((site, index) => (
                <motion.div
                  key={site.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ flex: '0 1 350px', maxWidth: '350px' }}
                >
                  <Card sx={{ height: '100%', background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)', color: 'white', '&:hover': { transform: 'translateY(-5px)', transition: 'transform 0.3s ease-in-out' } }}>
                    <CardContent sx={{ p: 4 }}>
                      <Chip label={site.type} size="small" sx={{ mb: 3, backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'white', mb: 2 }}>
                        {site.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.88)', mb: 3, lineHeight: 1.6 }}>
                        {site.description}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                        {site.technologies.map((technology) => (
                          <Chip key={technology} label={technology} size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                        ))}
                      </Box>
                      <Button href={site.url} target="_blank" rel="noreferrer" endIcon={<LaunchIcon />} sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.45)' }} variant="outlined">
                        Visit live site
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>

            {/* Private SaaS Work */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <Card sx={{ maxWidth: 1100, width: '100%', background: 'linear-gradient(135deg, #172033 0%, #263449 100%)', color: 'white', border: '1px solid rgba(144,202,249,0.35)' }}>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Box sx={{ display: 'flex', alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between', gap: 2, flexWrap: 'wrap', mb: 2 }}>
                    <Box>
                      <Chip label="Private / NDA Protected" size="small" sx={{ mb: 2, backgroundColor: 'rgba(144,202,249,0.16)', color: '#90caf9', border: '1px solid rgba(144,202,249,0.35)' }} />
                      <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                        PRIVATE SAAS PRODUCTS
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: '#90caf9', fontWeight: 600 }}>
                      Selected work available on request
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.7, mb: 3, maxWidth: 900 }}>
                    Built and contributed to multiple private SaaS products and internal platforms, including release automation,
                    report generation, control panels, enterprise dashboards, cloud operations workflows, and supporting backend services.
                    Details can be shared privately where permitted.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {['SaaS Architecture', 'Frontend & Backend', 'REST APIs', 'Automation', 'Cloud Workflows', 'Admin Platforms'].map((skill) => (
                      <Chip key={skill} label={skill} size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }} />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>

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

              {/* Platform Services - 3 Cards */}
              <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
                {[
                  {
                    name: 'RELEASE AUTOMATION SERVICE',
                    type: 'Platform Service',
                    description: 'A service and interface for managing release workflows, deployment visibility, and repeatable delivery operations.',
                    technologies: ['React.js', 'TypeScript', 'Automation', 'Cloud Platform']
                  },
                  {
                    name: 'REPORT GENERATION SERVICE',
                    type: 'Platform Service',
                    description: 'A reporting workflow that turns operational data into structured, usable reports for teams and decision-makers.',
                    technologies: ['React.js', 'TypeScript', 'Data Workflows', 'API Integration']
                  },
                  {
                    name: 'CONTROL PANEL',
                    type: 'Admin Platform',
                    description: 'A centralized control panel for configuring platform capabilities, monitoring operations, and managing enterprise workflows.',
                    technologies: ['React.js', 'TypeScript', 'Dashboard UI', 'Role-based Workflows']
                  }
                ].map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                    style={{ flex: '0 1 350px', maxWidth: '350px' }}
                  >
                    <Card sx={{ height: '100%', background: 'linear-gradient(135deg, #334155 0%, #475569 100%)', color: 'white', '&:hover': { transform: 'translateY(-5px)', transition: 'transform 0.3s ease-in-out' } }}>
                      <CardContent sx={{ p: 4 }}>
                        <Chip label={project.type} size="small" sx={{ mb: 3, backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'white', mb: 2 }}>
                          {project.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3, lineHeight: 1.6 }}>
                          {project.description}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500, mb: 2, color: 'white' }}>
                          Technologies:
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          {project.technologies.map((technology) => (
                            <Chip key={technology} label={technology} size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }} />
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
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
      <Box id="contact" sx={{ order: 6, py: 8, background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 2, color: 'white' }}>
              Ready to Start Your Project?
            </Typography>
            <Typography variant="h6" sx={{ textAlign: 'center', mb: 6, color: '#94a3b8' }}>
              I'm currently available for new projects. Let's discuss your requirements!
            </Typography>
            
            {/* Availability Status */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
              <Card sx={{ 
                p: 3, 
                backgroundColor: 'rgba(34, 197, 94, 0.1)', 
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '20px'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ 
                    width: 12, 
                    height: 12, 
                    borderRadius: '50%', 
                    backgroundColor: '#22c55e',
                    animation: 'pulse 2s infinite'
                  }} />
                  <Typography variant="h6" sx={{ color: '#22c55e', fontWeight: 600 }}>
                    Available for New Projects
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mt: 1, textAlign: 'center' }}>
                  Response time: Within 24 hours
                </Typography>
              </Card>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {/* Contact Information */}
              <Box sx={{ maxWidth: '600px', width: '100%' }}>
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
                          New Delhi, India
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

            </Box>
            
            {/* Call to Action Buttons */}
            <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap', mt: 6 }}>
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
                onClick={() => {
                  const email = 'utkarshsri288@gmail.com';
                  const subject = 'Freelance Project Inquiry';
                  
                  // Try to open email client first
                  try {
                    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
                  } catch (e) {
                    console.log('Mailto not supported');
                  }
                  
                  // Fallback: copy email to clipboard after a short delay
                  setTimeout(() => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText(email).then(() => {
                        // Silent success - no alert needed
                      }).catch(() => {
                        // Silent fallback
                      });
                    }
                  }, 500);
                }}
              >
                Send Email
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                startIcon={<PhoneIcon />}
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
                onClick={() => window.location.href = 'tel:+918009960930'}
              >
                Call Now
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                startIcon={<LinkedInIcon />}
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
                onClick={() => window.open('https://linkedin.com/in/utkarshsri112/', '_blank')}
              >
                LinkedIn
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ order: 7, background: '#080d18', borderTop: '1px solid rgba(148,163,184,0.18)', color: 'white' }}>
        <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3, py: 6 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 5, flexWrap: 'wrap' }}>
            <Box sx={{ maxWidth: 420 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                UTKARSH SRIVASTAV
              </Typography>
              <Typography variant="body1" sx={{ color: '#94a3b8', lineHeight: 1.7, mb: 3 }}>
                Freelance Full-Stack Engineer building SaaS products, web applications, platform services, and reliable digital experiences.
              </Typography>
              <Button href="mailto:utkarshsri288@gmail.com?subject=Freelance%20Project%20Inquiry" startIcon={<EmailIcon />} variant="contained" sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', '&:hover': { background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)' } }}>
                Start a conversation
              </Button>
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Explore</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                  <Button key={item} href={`#${item.toLowerCase()}`} sx={{ justifyContent: 'flex-start', minWidth: 0, p: 0, color: '#94a3b8', '&:hover': { color: 'white', background: 'transparent' } }}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Connect</Typography>
              <Button href="https://linkedin.com/in/utkarshsri112/" target="_blank" rel="noreferrer" startIcon={<LinkedInIcon />} sx={{ color: '#94a3b8', p: 0, '&:hover': { color: 'white', background: 'transparent' } }}>
                LinkedIn
              </Button>
              <Typography variant="body2" sx={{ color: '#64748b', mt: 2 }}>New Delhi, India</Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 5, pt: 3, borderTop: '1px solid rgba(148,163,184,0.12)', display: 'flex', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>
            <Typography variant="body2" sx={{ color: '#64748b' }}>© {new Date().getFullYear()} Utkarsh Srivastav. All rights reserved.</Typography>
            <Typography variant="body2" sx={{ color: '#64748b' }}>Private SaaS work available on request.</Typography>
          </Box>
        </Box>
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
