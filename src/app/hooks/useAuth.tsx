import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const useAuth = () => {
  const token = useSelector((state: RootState) => state?.auth?.token);
  return token;
};

export default useAuth;
