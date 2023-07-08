import React, { useState, ChangeEvent } from 'react';
import styles from './ToggleControl.module.scss';
import ToggleControlProps from './ToggleControl.types';

const ToggleControl: React.FC<ToggleControlProps> = ({ label, name, initialValue = false, handleToggle, isChecked }) => {
    const [isToggled, setIsToggled] = useState(initialValue);

    const toggle = (e: ChangeEvent<HTMLInputElement>) => {
        setIsToggled(e.target.checked);
        handleToggle(name, e.target.checked);
    };

    return (

        <div className={styles.toggleContainer} onClick={() => handleToggle(name, !isChecked)}>
            <label className={styles.toggleLabel}>{label}</label>
            <div className={styles.toggleSwitch}>
                <input type="checkbox" checked={isToggled} onChange={toggle} />
                <span className={styles.slider}></span>
                <div style={{ backgroundColor: isChecked ? 'green' : 'red' }}></div>

            </div>
        </div>
    );
};

export default ToggleControl;
