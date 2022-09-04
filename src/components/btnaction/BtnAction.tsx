// Vendors
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface Props {
  symbols: any[];
  handleSelectRates: () => void;
  handleAddRate: (symbol: string) => void;
}

const BtnAction: React.FC<Props> = ({ symbols, handleSelectRates, handleAddRate }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value as string);
  };

  const handleShowDropdown = () => {
    handleSelectRates();
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      {!showDropdown ? (
        <Button
          variant="contained"
          size="large"
          color="success"
          fullWidth
          disableElevation
          onClick={handleShowDropdown}
        >
          (+) Add More Currencies
        </Button>
      ) : (
        <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
          <Select value={selected} onChange={handleChange} fullWidth>
            {symbols?.map(({ symbol, name }) => (
              <MenuItem key={symbol} value={symbol}>
                {symbol} - {name}
              </MenuItem>
            ))}
          </Select>
          <Button
            variant="contained"
            size="large"
            color="success"
            disableElevation
            onClick={() => handleAddRate(selected)}
            sx={{ height: '55px' }}
          >
            Submit
          </Button>
        </Stack>
      )}
    </>
  );
};

export default BtnAction;
