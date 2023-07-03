import React from 'react';
import styles from './Button.module.scss';
import IButtonProps from './Buttons.types';

const Button: React.FC<IButtonProps> = ({ label, type, variant, onClick, isLoading }) => {
  return (
    <button type={type} className={`${styles.btn} ${styles[variant]}`} onClick={onClick} disabled={isLoading}>
      <span>{label}</span>
      {isLoading ? <div className={styles.loader}></div> : null}
    </button>
  );
};

export default Button;
