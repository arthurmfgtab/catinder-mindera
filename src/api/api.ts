import axios from 'axios';
import { BASE_URL, CATS_API_KEY } from '@env';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-api-key': CATS_API_KEY,
  },
});

export default api;
