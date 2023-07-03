import React, { createRef, useEffect, useState } from 'react';
import styles from './Institutions.module.scss';
import { IData, IInstitutionsProps } from './Institutions.types';
import Select from 'react-select';
import {
  BasicInformation,
  BasicInformationSchema,
  hostConfigurations,
  hostConfigurationsSchema,
  passwordPolicies,
  passwordPoliciesSchema,
} from './data.data';
import { Formik, Form, FormikProps } from 'formik';
import Input from '../../atom/input/Input';
import Button from '../../atom/button/Button';
import { useGetQuery, usePostMutation } from '../../../sevices/apiCall';
import endpoints from '../../../api/endpoints';
import Loader from '../../atom/loader/Loader';

const Institutions: React.FC<IInstitutionsProps> = ({ institution, countries }) => {
  const [basicInformationValues, setBasicInformationValues] = useState<IData>({});
  const [hostConfigurationsValues, setHostConfigurationsValues] = useState<IData>({});
  const [passwordConfigurationsValues, setPasswordConfigurationsValues] = useState<IData>({});
  const [postInstitution] = usePostMutation();

  const { data: institutionData, isLoading } = useGetQuery(`${endpoints.Institution}/${institution?.instId}`, {
    skip: !institution,
  });

  const basicInformationFormRef = createRef<FormikProps<any>>();
  const hostConfigurationsFormRef = createRef<FormikProps<any>>();
  const passwordConfigurationsFormRef = createRef<FormikProps<any>>();

  useEffect(() => {
    if (institutionData) {
      const basicInfo: IData = {};
      const hostInfo: IData = {};
      const passwordInfo: IData = {};

      // Match the backend response fields with your form field keys
      for (const key in BasicInformation) {
        if (key in institutionData) {
          basicInfo[key] = institutionData[key];
        }
      }

      for (const key in hostConfigurations) {
        if (key in institutionData.hostConfiguration) {
          hostInfo[key] = institutionData.hostConfiguration[key];
        }
      }

      for (const key in passwordPolicies) {
        if (key in institutionData.passwordPolicy) {
          passwordInfo[key] = institutionData.passwordPolicy[key];
        }
      }
      setBasicInformationValues(basicInfo);
      setHostConfigurationsValues(hostInfo);
      setPasswordConfigurationsValues(passwordInfo);
    }
  }, [institutionData]);

  const handleSubmit = async () => {
    const validateResults = await Promise.all([
      basicInformationFormRef.current?.validateForm(),
      hostConfigurationsFormRef.current?.validateForm(),
      passwordConfigurationsFormRef.current?.validateForm(),
    ]);
    console.log('Combined Data:', validateResults);

    const combinedData = {
      ...basicInformationValues,
      ...hostConfigurationsValues,
      ...passwordConfigurationsValues,
    };
    console.warn('resutlssssadsdasdasd');
    postInstitution({ apiUrl: endpoints.Institution, formData: combinedData }).then((res) => {
      console.warn('resutlsss', res);
    });
  };

  const handleBasicInformationSubmit = (values: any) => {
    setBasicInformationValues(values);
    return values;
  };

  const handleHostConfigurationsSubmit = (values: any) => {
    setHostConfigurationsValues(values);
    return values;
  };

  const handlePasswordConfigurationsSubmit = (values: any) => {
    setPasswordConfigurationsValues(values);
    return values;
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={styles.institutionsContainer}>
      <h1>Save Institution</h1>
      <h4>Basic Information</h4>
      <Formik
        innerRef={basicInformationFormRef}
        initialValues={
          basicInformationValues ??
          Object.keys(BasicInformation).reduce((obj: any, key: any) => {
            obj[key] = '';
            return obj;
          }, {})
        }
        enableReinitialize
        validationSchema={BasicInformationSchema}
        onSubmit={handleBasicInformationSubmit}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form className={styles.formContainer}>
            {Object.entries(BasicInformation).map(([key, field]) =>
              field.type === 'select' ? (
                <div key={key} style={{ display: 'flex', gap: '10px', justifyContent: 'space-between' }}>
                  <p>{field.label}</p>
                  <Select
                    options={countries}
                    placeholder={field.label}
                    value={values[key]?.value}
                    onChange={setFieldValue}
                    name={key}
                  />
                </div>
              ) : (
                <Input
                  key={key}
                  placeholder={field.label}
                  label={field.label}
                  name={key}
                  type={field.fieldType}
                  value={values[key]}
                  setFieldValue={setFieldValue}
                  flexed
                  required={field.required}
                  error={touched[key] && errors[key] ? (errors[key] as string) : ''}
                />
              ),
            )}
          </Form>
        )}
      </Formik>
      <h4>Host Configuration</h4>
      <Formik
        innerRef={hostConfigurationsFormRef}
        initialValues={
          hostConfigurationsValues ??
          Object.keys(hostConfigurations).reduce((obj: any, key: any) => {
            obj[key] = '';
            return obj;
          }, {})
        }
        enableReinitialize
        validationSchema={hostConfigurationsSchema}
        onSubmit={handleHostConfigurationsSubmit}
      >
        {({ errors, values, setFieldValue }) => (
          <Form className={styles.formContainer}>
            {Object.entries(hostConfigurations).map(([key, field]) => (
              <Input
                key={key}
                placeholder={field.label}
                label={field.label}
                name={key}
                type={field.fieldType}
                value={values[key]}
                setFieldValue={setFieldValue}
                flexed
                required={field.required}
                error={errors[key] ? (errors[key] as string) : ''}
              />
            ))}
          </Form>
        )}
      </Formik>
      <h4>Password Configuration Policies</h4>
      <Formik
        innerRef={passwordConfigurationsFormRef}
        initialValues={
          passwordConfigurationsValues ??
          Object.keys(passwordConfigurationsValues ?? passwordPolicies).reduce((obj: any, key: any) => {
            obj[key] = '';
            return obj;
          }, {})
        }
        enableReinitialize
        validationSchema={passwordPoliciesSchema}
        onSubmit={handlePasswordConfigurationsSubmit}
      >
        {({ errors, values, setFieldValue }) => (
          <Form className={styles.formContainer}>
            {Object.entries(passwordPolicies).map(([key, field]) => (
              <Input
                key={key}
                placeholder={field.label}
                label={field.label}
                name={key}
                type={field.fieldType}
                value={values[key]}
                setFieldValue={setFieldValue}
                flexed
                required={field.required}
                error={errors[key] ? (errors[key] as string) : ''}
              />
            ))}
          </Form>
        )}
      </Formik>
      <br></br>
      <Button
        label="Submit"
        type="button"
        variant="primary"
        isLoading={false}
        onClick={handleSubmit}
        style={{ width: '10rem', marginTop: '2rem' }}
      />
    </div>
  );
};

export default Institutions;
