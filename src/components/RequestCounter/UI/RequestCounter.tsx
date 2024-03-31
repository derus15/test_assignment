import { useSelector } from 'react-redux';
import { getRequestCounter } from '../model/selectors/getRequestCounter.ts';
import style from './RequestCounter.module.css';

const RequestCounter = () => {
    
    const requestCounter = useSelector(getRequestCounter);
    
    return (
        <div className={style.CounterContainer}>
            Количество get запросов: {requestCounter}
        </div>
    );
};

export default RequestCounter;
