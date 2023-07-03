import React from 'react';
import DashboardTemplate from '../../../components/templates/dashboardTemplate/DashboardTemplate';
import { useGetQuery } from '../../../sevices/apiCall';
import endpoints from '../../../api/endpoints';

const Dashboard: React.FC = () => {
  const { data } = useGetQuery(endpoints.institution);
  const { data: countries } = useGetQuery(endpoints.countries);
  const { data: grid } = useGetQuery(endpoints.institutionGrid);
  const options = data?.map((val: any) => ({
    value: val.instId,
    label: val.instName,
  }));

  const countriesData = countries?.map((item: any) => {
    return {
      value: item.countryId,
      label: item.countryDesc,
    };
  });

  return <DashboardTemplate data={options} gridData={grid} countries={countriesData} />;
};

export default Dashboard;
