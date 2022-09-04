// Vendors
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Styles
import { Item } from './RateItem.style';

interface Props {
  id: number;
  rate: number;
  symbol: string;
  symbolName: string;
  amount: number;
  deleteRate: () => void;
}

const RateItem: React.FC<Props> = ({ id, rate, symbol, symbolName, amount, deleteRate }) => {
  return (
    <Item>
      <Box sx={{ flexGrow: 1, padding: '10px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" gutterBottom>
            {symbol}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {amount * rate}
          </Typography>
        </Box>
        <Typography variant="subtitle1" sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>
          {symbol} - {symbolName}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontStyle: 'italic' }}>
          1 USD = {symbol} {rate}
        </Typography>
      </Box>
      <Button variant="contained" color="error" onClick={deleteRate}>
        (-)
      </Button>
    </Item>
  );
};

export default RateItem;
