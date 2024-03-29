export interface ExchangeRateSchema {
    data: {
        [date: string]: number
    };
    loadingStatus: 'loading' | 'loaded' | 'error' | '';
}
