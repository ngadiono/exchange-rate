import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.apilayer.com',
});

instance.defaults.headers.common['apikey'] = `${process.env.REACT_APP_EXCHANGE_API_KEY}`;

export default instance;
