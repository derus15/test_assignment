import { configureStore } from '@reduxjs/toolkit';
import { exchangeRateReducer } from '../../services/fetchExchangeRate/slice/exchangeRateSlice.ts';
import { currenciesFiltersReducer } from '../../components/CurrencyFilters/model/slice/currenciesFiltersSlice.ts';
import { datePickerReducer } from '../../components/DatePicker/model/slice/datePickerSlice.ts';
import { requestCounterReducer } from '../../components/RequestCounter/model/slice/requestCounterSlice.ts';

export const store = configureStore({
    reducer: {
        exchangeRate: exchangeRateReducer,
        currenciesFilters: currenciesFiltersReducer,
        datePicker: datePickerReducer,
        requestCounter: requestCounterReducer,
    },
});

export type AppDispatch = typeof store.dispatch
