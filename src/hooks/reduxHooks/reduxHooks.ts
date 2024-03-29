import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/Store/store.ts';

export const useAppDispatch: () => AppDispatch = useDispatch;
