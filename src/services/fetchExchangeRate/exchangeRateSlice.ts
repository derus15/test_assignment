import { createSlice } from '@reduxjs/toolkit';
import { fetchExchangeRate } from './fetchExchangeRate.tsx';
import { ExchangeRateSchema } from './types.ts';

const initialState: ExchangeRateSchema = {
    data: {},
    loadingStatus: '',
};

export const exchangeRateSlice = createSlice({

    name: 'exchangeRate',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(fetchExchangeRate.pending, (state) => {
                state.loadingStatus = 'loading';
            })
            .addCase(fetchExchangeRate.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loadingStatus = 'loaded';
            })
            .addCase(fetchExchangeRate.rejected, (state) => {
                state.loadingStatus = 'error';
            });
    },

});

export const { actions: exchangeRateActions } = exchangeRateSlice;

export const { reducer: exchangeRateReducer } = exchangeRateSlice;
