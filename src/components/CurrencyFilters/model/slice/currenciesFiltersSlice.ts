import { createSlice } from '@reduxjs/toolkit';
import { CurrenciesFiltersSchema } from '../types/types.ts';

const initialState: CurrenciesFiltersSchema = {
    filtersList: [],
};

export const currenciesFiltersSlice = createSlice({

    name: 'exchangeRate',
    initialState,
    reducers: {
        
        changeFilters: (state, action) => {

            if (state.filtersList.includes(action.payload)) {
                state.filtersList = state.filtersList.filter((sign) => sign !== action.payload);
            } else if (!state.filtersList.includes(action.payload)) {
                state.filtersList = [...state.filtersList, action.payload];
            }
        },
        
    },

});

export const { actions: currenciesFiltersActions } = currenciesFiltersSlice;

export const { reducer: currenciesFiltersReducer } = currenciesFiltersSlice;
