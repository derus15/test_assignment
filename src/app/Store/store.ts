import { configureStore } from '@reduxjs/toolkit';
import { exchangeRateReducer } from '../../services/fetchExchangeRate/exchangeRateSlice.ts';
import { currenciesFiltersReducer } from '../../components/CurrencyFilters/model/slice/currenciesFiltersSlice.ts';

export const store = configureStore({
    reducer: {
        exchangeRate: exchangeRateReducer,
        currenciesFilters: currenciesFiltersReducer,
    },
});

export type AppDispatch = typeof store.dispatch
