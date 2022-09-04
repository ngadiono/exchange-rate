// Vendors
import React from 'react';
import Button from '@mui/material/Button';

const BtnAction: React.FC = () => {
  return (
    <Button variant="contained" size="large" color="success" fullWidth disableElevation>
      (+) Add More Currencies
    </Button>
  );
};

export default BtnAction;
