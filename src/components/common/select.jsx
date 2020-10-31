import React from "react";
import Select from "@atlaskit/select";
import styled from "@emotion/styled";
import tw from "twin.macro";

const SelectWrapper = styled.div`
  ${tw`relative inline-block mr-2`}
  width: 200px;
`;

const SelectBox = ({ options: data, placeholder, onChange }) => {
  // change _id => value and name => label
  const options = data.map(({ _id: value, name: label, ...rest }) => ({
    value,
    label,
    ...rest,
  }));
  return (
    <SelectWrapper>
      <Select
        className="single-select"
        classNamePrefix="react-select"
        onChange={onChange}
        options={[
          {
            label: "All Cities",
            value: "",
          },
          ...options,
        ]}
        placeholder={placeholder}
      />
    </SelectWrapper>
  );
};

export default SelectBox;
