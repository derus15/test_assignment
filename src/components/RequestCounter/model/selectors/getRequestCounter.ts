import { StateSchema } from '../../../../app/Store/types.ts';

export const getRequestCounter = (state: StateSchema) => state.requestCounter.requestCounter;
