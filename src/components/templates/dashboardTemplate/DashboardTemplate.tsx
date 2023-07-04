import React, { useState } from 'react';
import styles from './DashboardTemplate.module.scss';
import SideBar from '../../molecules/sideBar/SideBar';
import image from '../../../assets/icons/itg-logo.png';
import Select from 'react-select';
import DashboardTemplateProps from './DashboardTemplate.types';
import Institutions from '../../organisms/institutions/Institutions';
import InstitutionsGrid from '../../organisms/institutionsGrid/InstitutionsGrid';

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({ data, gridData, countries }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currenInst, setCurrenInst] = useState();

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };

  const handleEdit = (rowData: any) => {
    setCurrenInst(rowData);
  };

  return (
    <div className={styles.dashboardContainer}>
      <SideBar logo={<img className={styles.logo} src={image} />}>
        <Select options={data} onChange={handleChange} value={selectedOption} />
      </SideBar>
      <div className={styles.sectionsContainer}>
        <Institutions institution={currenInst} countries={countries} />
        <InstitutionsGrid gridData={gridData} onEdit={handleEdit} />
      </div>
    </div>
  );
};

export default DashboardTemplate;
