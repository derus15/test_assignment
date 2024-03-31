import { createSlice } from '@reduxjs/toolkit';
import { DatePickerSchema } from '../types/types.ts';

const initialState: DatePickerSchema = {
    date: {
        startDate: '',
        endDate: '',
    },
};

export const datePickerSlice = createSlice({

    name: 'exchangeRate',
    initialState,
    reducers: {

        setDate: (state, action) => {
            [state.date.startDate, state.date.endDate] = [action.payload[0], action.payload[1]];
        },
        
    },

});

export const { actions: datePickerActions } = datePickerSlice;

export const { reducer: datePickerReducer } = datePickerSlice;
