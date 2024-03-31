import style from './CurrencyChart.module.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { StateSchema } from '../../app/Store/types.ts';
import { parseChartData } from '../../shared/lib/parseChartData.ts';
import { getExchangeLoadingStatus } from '../../services/fetchExchangeRate/selectors/fetchExchangeSelectros.ts';
import { memo } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const initialData = {
    labels: ['2024.03.02', '2024.03.03', '2024.03.04', '2024.03.05', '2024.03.06'],
    datasets: [{
        label: '',
        data: [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
    }],
};

export const CurrencyChart = memo(() => {

    const currencyDataList = useSelector((state: StateSchema) => state.exchangeRate?.data);
    const isLoading = useSelector(getExchangeLoadingStatus) === 'loading';
    const data = parseChartData(currencyDataList);

    if (isLoading) {
        return (
            <div className={style.Chart}>
                <h1>Loading...</h1>;
            </div>
        );
            
    }

    return (
        <div className={style.Chart}>
            <Line data={data || initialData} />
        </div>
    );
});
