// Vendors
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Styles
import { Item } from './CurrencyItem.style';

const CurrencyItem: React.FC = () => {
  return (
    <Item>
      <Box sx={{ flexGrow: 1, padding: '10px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" gutterBottom>
            IDR
          </Typography>
          <Typography variant="h6" gutterBottom>
            8.9
          </Typography>
        </Box>
        <Typography variant="subtitle1" sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>
          USD - United States Dollars
        </Typography>
        <Typography variant="subtitle1" sx={{ fontStyle: 'italic' }}>
          USD - United States Dollars
        </Typography>
      </Box>
      <Button variant="contained" color="error">
        (-)
      </Button>
    </Item>
  );
};

export default CurrencyItem;
