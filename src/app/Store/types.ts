import { ExchangeRateSchema } from '../../services/fetchExchangeRate/types/types.ts';
import { CurrenciesFiltersSchema } from '../../components/CurrencyFilters/model/types/types.ts';
import { DatePickerSchema } from '../../components/DatePicker/model/types/types.ts';
import { RequestCounterSchema } from '../../components/RequestCounter/model/types/types.ts';

export interface StateSchema {
    exchangeRate: ExchangeRateSchema
    currenciesFilters: CurrenciesFiltersSchema,
    datePicker: DatePickerSchema,
    requestCounter: RequestCounterSchema,
}
