import React from 'react';
import styles from './Button.module.scss';
import IButtonProps from './Buttons.types';

const Button: React.FC<IButtonProps> = ({ label, type, variant, onClick, isLoading, style }) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[variant]}`}
      onClick={onClick}
      disabled={isLoading}
      style={style}
    >
      <span>{label}</span>
      {isLoading ? <div className={styles.loader}></div> : null}
    </button>
  );
};

export default Button;
