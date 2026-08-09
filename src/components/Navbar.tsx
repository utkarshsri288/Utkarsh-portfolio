import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon
} from '@mui/icons-material';

interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Services', sectionId: 'services' },
    { label: 'Process', sectionId: 'process' },
    { label: 'About', sectionId: 'about' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Experience', sectionId: 'experience' },
    { label: 'Skills', sectionId: 'skills' },
    { label: 'Contact', sectionId: 'contact' }
  ];

  const drawer = (
    <Box sx={{ width: 300, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2.5, mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              background: 'linear-gradient(135deg, #818cf8 0%, #22d3ee 100%)',
              border: '1px solid rgba(255,255,255,0.35)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              mr: 2
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: '1rem',
                color: 'white',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                letterSpacing: '-1px',
                lineHeight: 1
              }}
            >
              US
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                color: 'white',
                fontSize: '0.9rem',
                letterSpacing: '0.3px'
              }}
            >
              UTKARSH SRIVASTAV
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '0.7rem',
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
              }}
            >
              Freelance Full-Stack Engineer
            </Typography>
          </Box>
        </Box>
        <IconButton
          color="inherit"
          aria-label="close drawer"
          onClick={handleDrawerToggle}
          sx={{ color: 'white' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.label} 
            onClick={() => handleNavClick(item.sectionId)}
            sx={{
              mx: 1.5,
              mb: 0.5,
              borderRadius: 2.5,
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(129,140,248,0.12)',
                transition: 'background-color 0.3s ease'
              }
            }}
          >
            <ListItemText 
              primary={item.label} 
              sx={{ 
                color: 'white',
                '& .MuiListItemText-primary': {
                  fontWeight: 500,
                  fontSize: '1.1rem'
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: 'rgba(7, 11, 20, 0.78)', 
          backdropFilter: 'blur(20px) saturate(160%)',
          borderBottom: '1px solid rgba(148,163,184,0.12)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
          zIndex: theme.zIndex.drawer + 1
        }}
      >
        <Toolbar sx={{ width: '100%', maxWidth: 1440, mx: 'auto', minHeight: { xs: 68, md: 76 }, px: { xs: 2, sm: 3, lg: 5 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box
              sx={{
                width: 45,
                height: 45,
                background: 'linear-gradient(135deg, #818cf8 0%, #22d3ee 100%)',
                border: '1px solid rgba(255,255,255,0.35)',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                mr: 2
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  color: 'white',
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                  letterSpacing: '-1px',
                  lineHeight: 1
                }}
              >
                US
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: 'white',
                  fontSize: { sm: '1.1rem', md: '1.3rem' },
                  letterSpacing: '0.5px'
                }}
              >
                UTKARSH SRIVASTAV
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.75rem',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}
              >
                Freelance Full-Stack Engineer
              </Typography>
            </Box>
          </Box>
          
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 0.25, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button 
                key={item.label}
                color="primary" 
                onClick={() => handleNavClick(item.sectionId)}
                sx={{
                  color: '#cbd5e1',
                  px: 1.25,
                  py: 0.8,
                  borderRadius: '10px',
                  fontSize: '0.84rem',
                  '&:hover': {
                    color: 'white',
                    backgroundColor: 'rgba(129,140,248,0.12)',
                    transform: 'translateY(-1px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              display: { xs: 'flex', lg: 'none' },
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                transition: 'background-color 0.3s ease'
              }
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 300,
            backgroundColor: 'rgba(9, 14, 26, 0.98)',
            backdropFilter: 'blur(20px)',
            borderLeft: '1px solid rgba(148,163,184,0.14)'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
