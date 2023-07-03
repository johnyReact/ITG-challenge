interface DashboardTemplateProps {
  data: {
    value: number;
    label: string;
  }[];
  gridData: unknown;
  countries: {
    value: number;
    label: string;
  }[];
}

export default DashboardTemplateProps;
