interface IInstitutionsGridProps {
  gridData?: any;
  onEdit: (rowData: any) => void;
}
type Data = {
  instCode: string;
  instName: string;
  instId: string;
};
type Institution = {
  instCode: string;
  instName: string;
  instId: number;
};
export type { IInstitutionsGridProps, Data, Institution };
