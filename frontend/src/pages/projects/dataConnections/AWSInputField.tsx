import * as React from 'react';
import { FormGroup, TextInput } from '@patternfly/react-core';
import PasswordInput from '~/pages/projects/components/PasswordInput';
import { AWS_KEYS } from './const';

type AWSInputFieldProps = {
  isPassword?: boolean;
  isRequired: boolean;
  onChange: (key: AWS_KEYS, value: string) => void;
  type: AWS_KEYS;
  value: string;
};

const AWSInputField: React.FC<AWSInputFieldProps> = ({
  isPassword,
  isRequired,
  onChange,
  type,
  value,
}) => {
  const ComponentField = isPassword ? PasswordInput : TextInput;

  return (
    <FormGroup isRequired={isRequired} label={type}>
      <ComponentField
        aria-label={`AWS field ${type}`}
        isRequired={isRequired}
        value={value}
        onChange={(value) => onChange(type, value)}
      />
    </FormGroup>
  );
};

export default AWSInputField;
