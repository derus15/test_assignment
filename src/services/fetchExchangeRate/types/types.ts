export type CurrencyRates = {
    [currency: string]: {
        [date: string]: number;
    };
};

export interface ExchangeRateSchema {
    data: CurrencyRates[];
    loadingStatus: 'loading' | 'loaded' | 'error' | '';
}
