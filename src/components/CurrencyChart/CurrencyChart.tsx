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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

export const CurrencyChart = () => {

    const currency = useSelector((state: StateSchema) => state.exchangeRate?.data);

    const data = {
        labels: [],
        datasets: [{
            label: 'Euro',
            data: currency,
            fill: false,
            borderColor: 'white',
            tension: 0.1,
        }],
    };

    return (

        <div className={style.Chart}>
            <Line data={data} />
        </div>

    );
};
