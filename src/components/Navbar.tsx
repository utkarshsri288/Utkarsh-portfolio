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
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
    { label: 'About', sectionId: 'about' },
    { label: 'Experience', sectionId: 'experience' },
    { label: 'Skills', sectionId: 'skills' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Contact', sectionId: 'contact' }
  ];

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, mb: 2 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: '2px solid rgba(255,255,255,0.3)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
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
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
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
          backgroundColor: 'rgba(26, 26, 26, 0.95)', 
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
          zIndex: theme.zIndex.drawer + 1
        }}
      >
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box
              sx={{
                width: 45,
                height: 45,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: '2px solid rgba(255,255,255,0.3)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
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
                Uc
              </Typography>
            </Box>
          </Box>
          
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navItems.map((item) => (
              <Button 
                key={item.label}
                color="primary" 
                onClick={() => handleNavClick(item.sectionId)}
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
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
              display: { xs: 'flex', md: 'none' },
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
            width: 250,
            backgroundColor: 'rgba(26, 26, 26, 0.98)',
            backdropFilter: 'blur(10px)',
            border: 'none'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
