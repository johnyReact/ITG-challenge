interface IInstitutionsGridProps {
  gridData?: any;
  onEdit: (rowData: any) => void;
  instId?: number | null
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
