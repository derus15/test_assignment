import { useEffect } from 'react';
import './styles/App.css';
import { useAppDispatch } from '../hooks/reduxHooks/reduxHooks.ts';
import { fetchExchangeRate } from '../services/fetchExchangeRate/fetchExchangeRate.tsx';
import { CurrencyChart } from '../components/CurrencyChart/CurrencyChart.tsx';
import { DataPicker } from '../components/DataPicker/DataPicker.tsx';
import CheckboxContainer from '../components/CurrencyFilters/UI/CheckboxContainer.tsx';

const App = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchExchangeRate({ currencies: ['eur'], startDate: '2024-03-02' }));
    }, [dispatch]);

    return (
        <div>
            <div className="ChartContainer">
                <CheckboxContainer />
                <CurrencyChart />
            </div>
            <DataPicker />
        </div>
    );
};

export default App;
