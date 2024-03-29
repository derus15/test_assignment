import Checkbox from '../../shared/UI/Checkbox/Checkbox.tsx';
import style from './CheckboxContainer.module.css';

const CheckboxContainer = () => (
    <div className={style.CheckboxContainer}>
        <Checkbox label="Евро" />
        <Checkbox label="Юань" />
        <Checkbox label="Доллар" />
    </div>
);

export default CheckboxContainer;
