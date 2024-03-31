import { StateSchema } from '../../../../app/Store/types.ts';

export const getDate = ((state: StateSchema) => state.datePicker.date);
