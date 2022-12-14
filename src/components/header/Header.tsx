// Vendors
import React, { memo } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// Styles
import { Input } from './Header.style';

interface Props {
  amount: number;
  ratesLength: number;
  onChangeAmount: (e: any) => void;
}

const Header: React.FC<Props> = ({ amount, ratesLength, onChangeAmount }) => {
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
          {ratesLength > 0 ? (
            <Input value={amount} onChange={onChangeAmount} />
          ) : (
            <Typography variant="h6" gutterBottom>
              {amount}
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default memo(Header);
