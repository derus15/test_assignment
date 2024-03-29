import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { incrementDate } from '../../shared/lib/incrementDate.ts';

interface fetchExchangeRateArg {
    currency: 'eur' | 'usd' | 'cny' | '',
    dateStart?: string,
}

const initialState: fetchExchangeRateArg = {
    currency: '',
    dateStart: '',
};

export const fetchExchangeRate = createAsyncThunk(
    'fetchExchange',
    async (arg: fetchExchangeRateArg = initialState) => {

        try {

            const { currency, dateStart } = arg;
            const currencyObject = {};
            let currentDate: string;

            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < 7; i++) {

                if (i === 0) {
                    currentDate = dateStart;
                } else {
                    currentDate = incrementDate(currentDate);
                }

                // eslint-disable-next-line no-await-in-loop
                const { data } = await axios.get(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${currentDate}/v1/currencies/${currency}.json`,
                );

                currencyObject[currentDate] = data[currency].rub;
            }

            console.log(currencyObject);
            return currencyObject;

        } catch (e) {
            console.log(e);
        }
    },
);
