import { ReactNode } from 'react';

interface IInputProps {
  label?: string;
  name: string;
  type?: string;
  icon?: IIconProps;
  error?: string | string[];
  value: string;
  required?: boolean;
  flexed?: boolean;
  placeholder?: string;
  validator?: (value: string) => string | null;
  onValueChange?: (name: string, value: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}
type IIconProps =
  | {
      svg?: {
        hideSvg: ReactNode;
        showSvg: ReactNode;
      };
      className: string;
      containerClassName: string;
    }
  | undefined;

export type { IInputProps, IIconProps };
