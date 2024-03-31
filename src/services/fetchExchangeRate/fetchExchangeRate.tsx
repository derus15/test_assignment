import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { incrementDate } from '../../shared/lib/incrementDate.ts';
import { AvailableCurrencies } from '../../app/types/globalTypes.ts';
import { toast } from 'react-toastify';
import { daysBetweenDates } from '../../shared/lib/daysBetweenDates.ts';
import { requestCounterActions } from '../../components/RequestCounter/model/slice/requestCounterSlice.ts';

interface fetchExchangeRateArg {
    currencies: AvailableCurrencies[],
    startDate?: string,
    endDate?: string,
}

export const fetchExchangeRate = createAsyncThunk(
    'fetchExchange',
    async (arg: fetchExchangeRateArg, thunkApi) => {

        try {

            const { currencies, startDate, endDate } = arg;

            const calendarPeriod = daysBetweenDates(startDate, endDate);
            const exchangeRates = {};

            // eslint-disable-next-line no-restricted-syntax
            for (const currency of currencies) {

                let currentDate: string = startDate;
                const ratesForCurrentCurrency = {};

                for (let i = 0; i <= calendarPeriod; i++) {

                    // eslint-disable-next-line no-await-in-loop
                    const { data } = await axios.get(
                        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${currentDate}/v1/currencies/${currency}.json`,
                    );

                    thunkApi.dispatch(requestCounterActions.incrementRequestCounter());

                    ratesForCurrentCurrency[currentDate] = data[currency].rub;
                    currentDate = incrementDate(currentDate);
                }

                exchangeRates[currency] = ratesForCurrentCurrency;

            }

            return exchangeRates;

        } catch (e) {

            if (e.response.status === 404) {
                toast.error('Серверная ошибка, курс не найден');
            } else {
                toast.error('Произошла непредвиденная ошибка');
            }
            return [];
        }
    },
);
