import { ExchangeRateSchema } from '../../services/fetchExchangeRate/types.ts';
import { CurrenciesFiltersSchema } from '../../components/CurrencyFilters/model/types/types.ts';

export interface StateSchema {
    exchangeRate: ExchangeRateSchema
    currenciesFilters: CurrenciesFiltersSchema,
}
