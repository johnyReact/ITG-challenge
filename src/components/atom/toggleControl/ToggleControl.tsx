import React, { useState, ChangeEvent } from 'react';
import styles from './ToggleControl.module.scss';
import ToggleControlProps from './ToggleControl.types';

const ToggleControl: React.FC<ToggleControlProps> = ({ label, name, initialValue = '0', handleToggle, isChecked }) => {
    const [isToggled, setIsToggled] = useState(initialValue === '1');

    const toggle = (e: ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setIsToggled(checked);
        handleToggle(name, checked ? '1' : '0');
    };

    return (
        <div className={styles.toggleContainer} onClick={() => handleToggle(name, isChecked === '1' ? '0' : '1')}>
            <label className={styles.toggleLabel}>{label}</label>
            <div className={styles.toggleSwitch}>
                <input type="checkbox" checked={isToggled} onChange={toggle} />
                <span className={styles.slider}></span>
                <div style={{ backgroundColor: isChecked === '1' ? 'green' : 'red' }}></div>
            </div>
        </div>
    );
};

export default ToggleControl;