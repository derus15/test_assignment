import Checkbox from '../../../shared/UI/Checkbox/Checkbox.tsx';
import style from './CheckboxContainer.module.css';
import { useDispatch } from 'react-redux';
import { currenciesFiltersActions } from '../model/slice/currenciesFiltersSlice.ts';

const CheckboxContainer = () => {

    // const [euroIsCheck, setEuroIsCheck] = useState();
    const dispatch = useDispatch();

    const changeCurrenciesFilters = (currency: string) => {
        dispatch(currenciesFiltersActions.changeFilters(currency));
    };

    return (
        <div className={style.CheckboxContainer}>
            <Checkbox label="Евро" onClick={() => changeCurrenciesFilters('eur')} />
            <Checkbox label="Юань" onClick={() => changeCurrenciesFilters('usd')} />
            <Checkbox label="Доллар" onClick={() => changeCurrenciesFilters('cny')} />
        </div>
    );

};

export default CheckboxContainer;
