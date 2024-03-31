import { CurrencyRates } from '../../services/fetchExchangeRate/types/types.ts';

export const parseChartData = (currencyDataList: CurrencyRates[] | undefined) => {

    if (currencyDataList.length === 0) {
        return undefined;
    }
        
    if ((Object.keys(currencyDataList[0])).length === 0) {
        return undefined;
    }

    const currencyList = Object.keys(currencyDataList[0]);
    const labels = Object.keys(currencyDataList[0][currencyList[0]]);

    const datasets = currencyList.map((currency) => ({
        label: currency,
        data: Object.values(currencyDataList[0][currency]),
        // eslint-disable-next-line no-bitwise
        borderColor: `#${(Math.random() * 0x1000000 | 0x1000000).toString(16).slice(1)}`,
    }));

    return {
        labels,
        datasets,
    };
};
