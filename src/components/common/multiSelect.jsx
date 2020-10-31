import React from 'react';
import { CheckboxSelect } from '@atlaskit/select';
import styled from '@emotion/styled';
import tw from 'twin.macro';

const SelectWrapper = styled.div`
  ${tw`relative inline-block mr-2`}
  min-width: 300px;
  max-width: 100%;
`;

const MultiSelect = ({ options: data, placeholder, onChange }) => {
  // change _id => value and name => label
  const options = data.map(({ _id: value, name: label, ...rest }) => ({
    value,
    label,
    ...rest,
  }));

  return (
    <SelectWrapper>
      <CheckboxSelect
        className="checkbox-select"
        classNamePrefix="select"
        onChange={onChange}
        options={options}
        placeholder={placeholder}
      />
    </SelectWrapper>
  );
};

export default MultiSelect;
