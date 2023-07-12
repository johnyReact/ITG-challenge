import React, { useState } from 'react';
import styles from './DashboardTemplate.module.scss';
import SideBar from '../../molecules/sideBar/SideBar';
import image from '../../../assets/icons/itg-logo.png';
import Select from 'react-select';
import DashboardTemplateProps from './DashboardTemplate.types';
import Institutions from '../../organisms/institutions/Institutions';
import InstitutionsGrid from '../../organisms/institutionsGrid/InstitutionsGrid';
import Button from '../../atom/button/Button';
import { useLogoutMutation } from '../../../sevices/apiCall';
import { logout } from '../../../components/templates/loginTemplate/LoginSlice';
import { store } from '../../../app/store';

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({ data, gridData, countries }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currenInst, setCurrenInst] = useState();
  const [logoutMutastion] = useLogoutMutation();

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };

  const handleEdit = (rowData: any) => {
    setCurrenInst(rowData);
  };
  const handleLogout = () => {
    logoutMutastion().then((res) => {
      if (res)
        store.dispatch(logout());
    });
  };

  return (
    <div className={styles.dashboardContainer}>
      <SideBar logo={<img className={styles.logo} src={image} />}>
        <div className={styles.sideBarItems}>
          <Select options={data} onChange={handleChange} value={selectedOption} />

          <Button label='Logout' type='button' variant='primary' isLoading={false} onClick={handleLogout} />
        </div>
      </SideBar>
      <div className={styles.sectionsContainer}>
        <Institutions institution={currenInst} countries={countries} instId={selectedOption} />
        <InstitutionsGrid gridData={gridData} onEdit={handleEdit} />
      </div>
    </div>
  );
};

export default DashboardTemplate;
