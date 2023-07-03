import * as Yup from 'yup';
import { FieldsType } from './Institutions.types';

const BasicInformation: FieldsType = {
  accountNbLength: {
    type: 'input',
    label: 'Account Number Length',
    fieldType: 'number',
    validation: Yup.number().required('Account Number Length is required'),
    required: true,
  },
  adhocRnNewExp: {
    type: 'input',
    label: 'AdhocRnNewExp',
    fieldType: 'text',
    validation: Yup.string().required('AdhocRnNewExp is required'),
    required: true,
  },
  instCode: {
    type: 'input',
    label: 'institution Code',
    fieldType: 'number',
    validation: Yup.number().required('Code is required'),
    required: true,
  },
  countryId: {
    type: 'select',
    label: 'Country ID',
    fieldType: 'number',
    validation: Yup.number(),
  },

  customerIdLength: {
    type: 'input',
    label: 'Customer ID Length',
    fieldType: 'number',
    validation: Yup.number().required('Customer ID Length is required'),
  },
  adhocRpNewExp: {
    type: 'input',
    label: 'AdhocRpNewExp',
    fieldType: 'text',
    validation: Yup.string().required('AdhocRpNewExp is required'),
  },
  daysToLockUser: {
    type: 'input',
    label: 'Days To Lock User',
    fieldType: 'number',
    validation: Yup.number().required('Days To Lock User is required'),
  },
  ecomOutputPath: {
    type: 'input',
    label: 'Ecom Output Path',
    fieldType: 'text',
    validation: Yup.string().required('Ecom Output Path is required'),
  },
  embossingOutputPath: {
    type: 'input',
    label: 'Embossing Output Path',
    fieldType: 'text',
    validation: Yup.string().required('Embossing Output Path is required'),
  },
  encryptionKey: {
    type: 'input',
    label: 'Encryption Key',
    fieldType: 'text',
    validation: Yup.string().required('Encryption Key is required'),
  },
};

const BasicInformationSchema = Yup.object().shape(
  Object.keys(BasicInformation).reduce((acc: Record<string, Yup.AnySchema>, curr: string) => {
    let validationType;
    switch (BasicInformation[curr].fieldType) {
      case 'text':
        validationType = Yup.string();
        break;
      case 'number':
        validationType = Yup.number();
        break;
      default:
        validationType = Yup.string();
        break;
    }

    acc[curr] = validationType.required(`${BasicInformation[curr].label} is required`);
    return acc;
  }, {}),
);

const hostConfigurations: FieldsType = {
  hostId: {
    type: 'input',
    label: 'Host ID',
    fieldType: 'number',
    validation: Yup.number(),
  },
  hostName: {
    type: 'input',
    label: 'Host Name',
    fieldType: 'text',
    validation: Yup.string(),
  },
  hostType: {
    type: 'input',
    label: 'Host Type',
    fieldType: 'text',
    validation: Yup.string(),
  },
  hostUrl: {
    type: 'input',
    label: 'Host URL',
    fieldType: 'text',
    validation: Yup.string().required('Host URL is required'),
    required: true,
  },
  requestBody: {
    type: 'input',
    label: 'Request Body',
    fieldType: 'text',
    validation: Yup.string(),
  },
  responseBody: {
    type: 'input',
    label: 'Response Body',
    fieldType: 'text',
    validation: Yup.string(),
  },
};
const hostConfigurationsSchema = Yup.object().shape(
  Object.keys(hostConfigurations).reduce((acc: Record<string, Yup.AnySchema>, curr: string) => {
    acc[curr] = hostConfigurations[curr].validation;
    return acc;
  }, {}),
);
const passwordPolicies: FieldsType = {
  daysToChangePassword: {
    type: 'input',
    label: 'Days To Change Password',
    fieldType: 'number',
    validation: Yup.number().required('Days To Change Password is required'),
    required: true,
  },
  lowerCount: {
    type: 'input',
    label: 'Lower Count',
    fieldType: 'number',
    validation: Yup.number(),
  },
  lowerFlag: {
    type: 'input',
    label: 'Lower Flag',
    fieldType: 'text',
    validation: Yup.string(),
  },
  numberCount: {
    type: 'input',
    label: 'Number Count',
    fieldType: 'number',
    validation: Yup.number(),
  },
  numberFlag: {
    type: 'input',
    label: 'Number Flag',
    fieldType: 'text',
    validation: Yup.string(),
  },
  passwordHistory: {
    type: 'input',
    label: 'Password History',
    fieldType: 'number',
    validation: Yup.number().required('Password History is required'),
    required: true,
  },
  passwordLength: {
    type: 'input',
    label: 'Password Length',
    fieldType: 'number',
    validation: Yup.number(),
  },
  policyId: {
    type: 'input',
    label: 'Policy ID',
    fieldType: 'number',
    validation: Yup.number(),
  },
  specialCharactersCount: {
    type: 'input',
    label: 'Special Characters Count',
    fieldType: 'number',
    validation: Yup.number(),
  },
  specialCharactersFlag: {
    type: 'input',
    label: 'Special Characters Flag',
    fieldType: 'text',
    validation: Yup.string(),
  },
  specialCharactersList: {
    type: 'input',
    label: 'Special Characters List',
    fieldType: 'text',
    validation: Yup.string(),
  },
  upperCount: {
    type: 'input',
    label: 'Upper Count',
    fieldType: 'number',
    validation: Yup.number(),
  },
  upperFlag: {
    type: 'input',
    label: 'Upper Flag',
    fieldType: 'text',
    validation: Yup.string(),
  },
};

const passwordPoliciesSchema = Yup.object().shape(
  Object.keys(passwordPolicies).reduce((acc: Record<string, Yup.AnySchema>, curr: string) => {
    acc[curr] = passwordPolicies[curr].validation;
    return acc;
  }, {}),
);

export {
  BasicInformation,
  hostConfigurations,
  passwordPolicies,
  BasicInformationSchema,
  hostConfigurationsSchema,
  passwordPoliciesSchema,
};
