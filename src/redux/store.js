import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './coins/coinslice';

const store = configureStore({
  reducer: {
    coins: coinsReducer,
  },
});

export default store;
