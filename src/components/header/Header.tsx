// Vendors
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ boxShadow: 'none' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1" sx={{ fontStyle: 'italic' }}>
              USD - United States Dollars
            </Typography>
            <Typography variant="h6" gutterBottom>
              USD
            </Typography>
          </Box>
          <Typography variant="h6">10.00</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
