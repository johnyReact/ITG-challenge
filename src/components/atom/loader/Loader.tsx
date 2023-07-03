import React from 'react';
import styles from './Loader.module.scss';
import { ILoaderProps } from './Loader.types';

const Loader: React.FC<ILoaderProps> = ({ backdrop }) => {
  const containerClassName = backdrop ? styles.backdropContainer : styles.loaderContainer;
  return (
    <div className={containerClassName}>
      <div className={styles.loaderWrapper}>
        <div className={styles.loader}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>Please wait ...</p>
      </div>
    </div>
  );
};

export default Loader;
