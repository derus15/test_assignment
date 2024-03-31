import { StateSchema } from '../../../app/Store/types.ts';

export const getExchangeLoadingStatus = (state: StateSchema) => state.exchangeRate.loadingStatus;
