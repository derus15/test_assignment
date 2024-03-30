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

    const currencyDataList = useSelector((state: StateSchema) => state.exchangeRate?.data);
    const data = parseChartData(currencyDataList);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className={style.Chart}>
            <Line data={data} />
        </div>
    );
};
