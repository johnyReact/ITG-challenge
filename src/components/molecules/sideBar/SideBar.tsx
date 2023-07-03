import React from 'react';
import styles from './SideBar.module.scss';
import SideBarProps from './SideBar.types';

const SideBar: React.FC<SideBarProps> = ({ children, logo }) => {
  return (
    <div className={styles.SideBarContainer}>
      <div className={styles.logo}>{logo}</div>
      {children}
    </div>
  );
};

export default SideBar;
