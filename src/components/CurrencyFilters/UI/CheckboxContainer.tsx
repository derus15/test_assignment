import Checkbox from '../../../shared/UI/Checkbox/Checkbox.tsx';
import style from './CheckboxContainer.module.css';
import { currenciesFiltersActions } from '../model/slice/currenciesFiltersSlice.ts';
import { memo } from 'react';
import { useAppDispatch } from '../../../hooks/reduxHooks/reduxHooks.ts';
import { AvailableCurrencies } from '../../../app/types/globalTypes.ts';

const CheckboxContainer = memo(() => {

    const dispatch = useAppDispatch();

    const changeCurrenciesFilters = (currency: AvailableCurrencies) => {
        dispatch(currenciesFiltersActions.changeFilters(currency));
    };

    return (
        <div className={style.CheckboxContainer}>
            <Checkbox label="Евро" onClick={() => changeCurrenciesFilters('eur')} />
            <Checkbox label="Доллар" onClick={() => changeCurrenciesFilters('usd')} />
            <Checkbox label="Юань" onClick={() => changeCurrenciesFilters('cny')} />
        </div>
    );

});

export default CheckboxContainer;
