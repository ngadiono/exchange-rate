// Vendors
import React, { useState } from 'react';
import Button from '@mui/material/Button';

const BtnAction: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  return (
    <>
      {!showDropdown ? (
        <Button
          variant="contained"
          size="large"
          color="success"
          fullWidth
          disableElevation
          onClick={() => setShowDropdown(!showDropdown)}
        >
          (+) Add More Currencies
        </Button>
      ) : (
        <div>yayay</div>
      )}
    </>
  );
};

export default BtnAction;
