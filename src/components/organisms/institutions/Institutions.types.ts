import * as Yup from 'yup';

interface IInstitutionsProps {
  institution?: { instCode: string; instName: string; instId: number };
  countries?: { value: number; label: string }[];
  instId: {
    value: number;
    label: string;
  } | null
}
interface BasicField {
  type: string;
  label: string;
  fieldType: string;
  validation?: Yup.NumberSchema | Yup.StringSchema | Yup.BooleanSchema;
  required?: boolean;
}
interface IData {
  [key: string]: any;
}

interface FieldsType {
  [key: string]: BasicField;
}
export type { IInstitutionsProps, FieldsType, BasicField, IData };
