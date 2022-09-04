// Vendors
import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

// Components
import Header from './components/header/Header';
import BtnAction from './components/btnaction/BtnAction';
import CurrencyItem from './components/currencyitem/CurrencyItem';

const App: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Header />
      <Box sx={{ width: '100%', padding: '20px 0' }}>
        <Stack spacing={2}>
          <CurrencyItem />
        </Stack>
      </Box>
      <BtnAction />
    </Container>
  );
};

export default App;
