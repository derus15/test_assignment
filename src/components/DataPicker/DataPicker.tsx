import style from './DataPicker.module.css';

export const DataPicker = () => (
    <div className={style.DataPickerContainer}>
        <label htmlFor="dateStart">
            Курс с
            <input type="date" id="dateStart" />
        </label>
        <label htmlFor="dateEnd">
            По
            <input type="date" id="dateEnd" />
        </label>
    </div>
);
