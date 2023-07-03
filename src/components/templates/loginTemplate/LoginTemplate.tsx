import React from 'react';
import styles from './Login.module.scss';
import image from '../../../assets/icons/itg-logo.png';
import Input from '../../../components/atom/input/Input';
import Button from '../../../components/atom/button/Button';
import { useLoginMutation } from '../../../sevices/apiCall';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('User Name is required'),
  password: Yup.string().required('Password is required'),
});

const LoginTemplate: React.FC = () => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = (values: any) => {
    login(values).then((res: any) => {
      if (res?.data?.data && res?.data?.data?.userId) {
        navigate('/dashboard');
      } else if (res?.error) {
        toast.error('error username or password are incorrect');
      }
    });
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginLeftContainer}>
        <img className={styles.loginImage} src={image} />
      </div>
      <div className={styles.loginRightContainer}>
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, values, setFieldValue }) => (
            <Form className={styles.loginContainer}>
              <div>
                <h3>Welcome to ITJ</h3>
              </div>
              <Input
                label="User Name"
                name="username"
                value={values.username}
                setFieldValue={setFieldValue}
                error={touched.username && errors.username ? errors.username : undefined}
              />
              <Input
                label="Password"
                name="password"
                type="password"
                value={values.password}
                setFieldValue={setFieldValue}
                error={touched.password && errors.password ? errors.password : undefined}
              />
              <Button label="Submit" type="submit" variant="primary" isLoading={isLoading} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginTemplate;
