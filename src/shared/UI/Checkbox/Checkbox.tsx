import { memo } from 'react';
import style from './Checkbox.module.css';

interface checkboxProps {
    label: string,
    checked?: boolean,
    onClick?: () => void,
}

const Checkbox = memo((props: checkboxProps) => {
    
    const {
        label,
        checked,
        onClick,
        ...otherProps
    } = props;

    return (
        <div>
            <label className={style.checkbox}>
                <input
                    type="checkbox"
                    checked={checked}
                    onClick={onClick}
                    {...otherProps}
                />
                <span className={style.span}>{label}</span>
            </label>
        </div>
    );
});

export default Checkbox;
