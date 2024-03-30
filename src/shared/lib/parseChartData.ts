import { CurrencyRates } from '../../services/fetchExchangeRate/types.ts';

export const parseChartData = (currencyDataList: CurrencyRates[]) => {

    if (!currencyDataList || currencyDataList.length === 0) {
        return null;
    }

    const currencyList = Object.keys(currencyDataList[0]);
    const labels = Object.keys(currencyDataList[0][currencyList[0]]);

    const datasets = currencyList.map((currency) => ({
        label: currency,
        data: Object.values(currencyDataList[0][currency]),
        borderColor: 'white',
    }));

    return {
        labels,
        datasets,
    };
};
