import { createSlice } from '@reduxjs/toolkit';
import { RequestCounterSchema } from '../types/types.ts';

const initialState: RequestCounterSchema = {
    requestCounter: 0,
};

export const requestCounterSlice = createSlice({

    name: 'exchangeRate',
    initialState,
    reducers: {

        incrementRequestCounter: (state) => {
            state.requestCounter += 1;
        },

    },

});

export const { actions: requestCounterActions } = requestCounterSlice;

export const { reducer: requestCounterReducer } = requestCounterSlice;
