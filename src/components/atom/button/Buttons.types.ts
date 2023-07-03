interface IButtonProps {
  label: string;
  type: 'button' | 'submit' | 'reset';
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  isLoading: boolean;
}

export default IButtonProps;
