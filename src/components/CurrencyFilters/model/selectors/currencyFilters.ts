import { StateSchema } from '../../../../app/Store/types.ts';

export const getCurrencyFilters = ((state: StateSchema) => state.currenciesFilters.filtersList);
