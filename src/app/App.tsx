import { useEffect } from 'react';
import './styles/App.css';
import { useAppDispatch } from '../hooks/reduxHooks/reduxHooks.ts';
import { fetchExchangeRate } from '../services/fetchExchangeRate/fetchExchangeRate.tsx';
import { CurrencyChart } from '../components/CurrencyChart/CurrencyChart.tsx';
import { DatePicker } from '../components/DatePicker/UI/DatePicker.tsx';
import CheckboxContainer from '../components/CurrencyFilters/UI/CheckboxContainer.tsx';
import { useSelector } from 'react-redux';
import Toast from '../shared/UI/Toaster/Toast.tsx';
import { getCurrencyFilters } from '../components/CurrencyFilters/model/selectors/currencyFilters.ts';
import { getDate } from '../components/DatePicker/model/selectors/getDate.ts';
import RequestCounter from '../components/RequestCounter/UI/RequestCounter.tsx';

const App = () => {

    const dispatch = useAppDispatch();
    const filters = useSelector(getCurrencyFilters);
    const dates = useSelector(getDate);

    useEffect(() => {
        dispatch(fetchExchangeRate({ currencies: filters, startDate: dates.startDate, endDate: dates.endDate }));
    }, [dispatch, dates, filters]);

    return (
        <div>
            <div className="ChartContainer">
                <CheckboxContainer />
                <CurrencyChart />
            </div>
            <DatePicker />
            <RequestCounter />
            <Toast />
        </div>
    );
};

export default App;
