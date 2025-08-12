import React from 'react';
import { Box, BoxProps } from '@mui/material';

interface CustomGridProps extends BoxProps {
  container?: boolean;
  item?: boolean;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  spacing?: number;
}

const CustomGrid: React.FC<CustomGridProps> = ({ 
  container = false, 
  item = false, 
  xs, 
  sm, 
  md, 
  lg, 
  xl, 
  spacing = 0,
  children,
  sx,
  ...props 
}) => {
  const getGridStyles = () => {
    const baseStyles: any = {};
    
    if (container) {
      baseStyles.display = 'flex';
      baseStyles.flexWrap = 'wrap';
      baseStyles.gap = spacing * 8; // Convert spacing to pixels
    }
    
    if (item) {
      const breakpoints = { xs, sm, md, lg, xl };
      const flexBasis: any = {};
      
      Object.entries(breakpoints).forEach(([breakpoint, size]) => {
        if (size !== undefined) {
          const percentage = (size / 12) * 100;
          if (breakpoint === 'xs') {
            flexBasis.flexBasis = `${percentage}%`;
            flexBasis.maxWidth = `${percentage}%`;
          } else {
            flexBasis[`@media (min-width:${getBreakpointWidth(breakpoint)}px)`] = {
              flexBasis: `${percentage}%`,
              maxWidth: `${percentage}%`,
            };
          }
        }
      });
      
      Object.assign(baseStyles, flexBasis);
      baseStyles.flexGrow = 0;
      baseStyles.flexShrink = 0;
    }
    
    return baseStyles;
  };
  
  const getBreakpointWidth = (breakpoint: string) => {
    const breakpoints: { [key: string]: number } = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    };
    return breakpoints[breakpoint] || 0;
  };

  return (
    <Box
      sx={{
        ...getGridStyles(),
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default CustomGrid;
