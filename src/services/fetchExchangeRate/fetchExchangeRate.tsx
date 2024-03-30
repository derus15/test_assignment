import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { incrementDate } from '../../shared/lib/incrementDate.ts';
import { AvailableCurrencies } from '../../app/types/globalTypes.ts';

interface fetchExchangeRateArg {
    currencies: AvailableCurrencies[],
    startDate?: string,
}

export const fetchExchangeRate = createAsyncThunk(
    'fetchExchange',
    async (arg: fetchExchangeRateArg) => {

        try {

            const { currencies, startDate } = arg;
            const calendarPeriod = 7;
            const exchangeRates = {};
            let currentDate: string = startDate;

            if (!currencies) {
                return {};
            }

            // eslint-disable-next-line no-restricted-syntax
            for (const currency of currencies) {

                const ratesForCurrentCurrency = {};

                for (let i = 0; i <= calendarPeriod; i++) {

                    // eslint-disable-next-line no-await-in-loop
                    const { data } = await axios.get(
                        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${currentDate}/v1/currencies/${currency}.json`,
                    );

                    ratesForCurrentCurrency[currentDate] = data[currency].rub;
                    
                    currentDate = incrementDate(currentDate);
                }

                exchangeRates[currency] = ratesForCurrentCurrency;

            }
                        
            return exchangeRates;
            
        } catch (e) {
            console.log(e);
        }
    },
);
