// Vendors
import React, { useEffect, useReducer, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

// Components
import Header from './components/header/Header';
import BtnAction from './components/btnaction/BtnAction';
import RateItem from './components/rateitem/RateItem';

// State
import { initialRateState, rateReducer } from './reducers/rate.reducer';
import { ratesAction, symbolsAction, rateDeleteAction, rateAddAction } from './reducers/rate.reducer';

// Utils
import axios from './axios';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(rateReducer, initialRateState);
  const { rates, symbols, selectRates } = state;
  const [amount, setAmount] = useState<number>(10);

  const handleSymbols = () => {
    const listSymbol = Object.keys(symbols).map((key) => ({
      symbol: key,
      name: symbols[key],
    }));
    const filteredSymbol = listSymbol.filter(({ symbol }) => selectRates.includes(symbol));
    return filteredSymbol;
  };

  const handleSelectRates = () => {};

  const handleAddRate = (symbol: string) => {
    const fetchRateOne = async () => {
      try {
        const resRates = await axios.get(`/exchangerates_data/latest?symbols=${symbol}&base=USD`);
        dispatch(rateAddAction(resRates.data.rates));
      } catch (err) {
        console.log(err);
      }
    };
    fetchRateOne();
  };

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
      <Header amount={amount} onChangeAmount={(e) => setAmount(e.target.value)} />
      <Box sx={{ width: '100%', padding: '20px 0' }}>
        {rates?.map(({ symbol, rate }) => (
          <RateItem
            key={symbol}
            symbol={symbol}
            rate={rate}
            amount={amount}
            symbolName={symbols[symbol]}
            deleteRate={() => dispatch(rateDeleteAction(symbol))}
          />
        ))}
      </Box>
      <BtnAction
        symbols={handleSymbols()}
        handleSelectRates={handleSelectRates}
        handleAddRate={handleAddRate}
      />
    </Container>
  );
};

export default App;
