import { configureStore } from '@reduxjs/toolkit';
import { exchangeRateReducer } from '../../services/fetchExchangeRate/exchangeRateSlice.ts';

export const store = configureStore({
    reducer: {
        exchangeRate: exchangeRateReducer,
    },
});

export type AppDispatch = typeof store.dispatch
