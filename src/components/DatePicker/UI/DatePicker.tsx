import style from './DatePicker.module.css';
import { ChangeEvent, memo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { datePickerActions } from '../model/slice/datePickerSlice.ts';
import { toast } from 'react-toastify';
import { getDateAndLastWeekDate } from '../../../shared/lib/getDateAndLastWeekDate.ts';

export const DatePicker = memo(() => {

    const dispatch = useDispatch();
    const dateStartElement = useRef<HTMLInputElement | undefined>();
    const dateEndElement = useRef<HTMLInputElement | undefined>();
    const { initialStartDate, initialEndDate } = getDateAndLastWeekDate();

    const [dateInputStart, setDateInputStart] = useState(initialStartDate);
    const [dateInputEnd, setDateInputEnd] = useState(initialEndDate);

    const handleSetDateStart = (e: ChangeEvent<HTMLInputElement>) => {
        setDateInputStart(e.target.value);
    };
    
    const handleSetDateEnd = (e: ChangeEvent<HTMLInputElement>) => {
        setDateInputEnd(e.target.value);
    };
    const handleSubmitDate = () => {

        const firstDate = new Date(dateInputStart);
        const secondDate = new Date(dateInputEnd);

        if (!dateInputStart || !dateInputEnd) {
            toast.error('Дата не выбрана');
        }

        if (firstDate > secondDate) {
            toast.error('Некорректная дата');
        } else {
            dispatch(datePickerActions.setDate([dateInputStart, dateInputEnd]));
        }
        
    };
    
    return (
        <div className={style.DataPickerContainer}>
            <label htmlFor="dateStart">
                Курс валюты с
                <input
                    type="date" 
                    id="dateStart"
                    value={dateInputStart}
                    onChange={(e) => handleSetDateStart(e)}
                    ref={dateStartElement} 
                />
            </label>
            <label htmlFor="dateEnd">
                По
                <input
                    type="date"
                    id="dateEnd"
                    value={dateInputEnd}
                    onChange={(e) => handleSetDateEnd(e)}
                    ref={dateEndElement}
                />
            </label>
            <button type="button" onClick={handleSubmitDate} className={style.submitBtn}>
                Загрузить данные
            </button>
        </div>
    );
    
});
