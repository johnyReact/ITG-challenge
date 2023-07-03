import React, { useEffect, useState } from 'react';
import styles from './Input.module.scss';
import { IInputProps } from './Input.types';
import { RenderEyes } from './InputFactory';

const Input: React.FC<IInputProps> = ({
  label,
  name,
  type = 'text',
  icon,
  error,
  value: initialValue,
  required,
  flexed,
  placeholder,
  setFieldValue,
}) => {
  const [touched, setTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState(initialValue || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setFieldValue(name, e.target.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched(true);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    setValue(initialValue || '');
  }, [initialValue]);

  return (
    <div className={styles.inputContainer}>
      {!flexed ? (
        <label htmlFor={name} className={styles.inputLabel}>
          {label} {required ? <span className={styles.requiredSpan}>*</span> : null}
        </label>
      ) : null}
      <div className={styles.inputWrapper}>
        {flexed ? (
          <label htmlFor={name} className={styles.inputLabel}>
            {label} {required ? <span className={styles.requiredSpan}>*</span> : null}
          </label>
        ) : null}

        <input
          id={name}
          name={name}
          placeholder={placeholder}
          type={showPassword ? 'text' : type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${styles.inputField} ${error ? styles.inputError : ''}`}
        />
        {type === 'password' && (
          <span className={styles.eyeIcon} onClick={toggleShowPassword}>
            {RenderEyes(icon, showPassword)}
          </span>
        )}
      </div>
      {error ? <div className={styles.errorText}>{error}</div> : null}
    </div>
  );
};

export default Input;
