// Vendors
import React, { useEffect, useReducer } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

// Components
import Header from './components/header/Header';
import BtnAction from './components/btnaction/BtnAction';
import RateItem from './components/rateitem/RateItem';

// State
import { initialRateState, rateReducer } from './reducers/rate.reducer';
import { ratesAction, symbolsAction, deleteRateAction } from './reducers/rate.reducer';

// Utils
import axios from './axios';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(rateReducer, initialRateState);
  const { rates, symbols } = state;

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const resRates = await axios.get(`/exchangerates_data/latest?symbols=IDR,EUR,GBP,SGD&base=USD`);
        dispatch(ratesAction(resRates.data.rates));
        const resSymbols = await axios.get('/exchangerates_data/symbols');
        dispatch(symbolsAction(resSymbols.data.symbols));
      } catch (err) {
        console.log(err);
      }
    };
    fetchRates();
  }, []);
  return (
    <Container maxWidth="sm">
      <Header />
      <Box sx={{ width: '100%', padding: '20px 0' }}>
        {rates?.map(({ id, symbol, rate }) => (
          <RateItem
            key={id}
            id={id}
            symbol={symbol}
            rate={rate}
            symbolName={symbols[symbol]}
            deleteRate={() => dispatch(deleteRateAction(id))}
          />
        ))}
      </Box>
      <BtnAction />
    </Container>
  );
};

export default App;
