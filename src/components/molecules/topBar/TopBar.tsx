import React from 'react';
import styles from './TopBar.module.scss';
import TopBarProps from './TopBar.types';

const TopBar: React.FC<TopBarProps> = ({ children, logo }) => {
  return (
    <div className={styles.TopBarContainer}>
      <div className={styles.logo}>{logo}</div>
      {children}
    </div>
  );
};

export default TopBar;
