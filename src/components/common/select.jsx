import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

const SelectWrapper = styled.div`
  ${tw`relative inline-block`}
`;

const SelectBox = styled.select`
  ${tw`block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
`;

const ArrowWrapper = styled.div`
  ${tw`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700`}
`;

const Arrow = styled.svg`
  ${tw`fill-current h-4 w-4`}
`;

const Select = ({ options, placeholder, onChange }) => {
  return (
    <SelectWrapper>
      <SelectBox onChange={onChange}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </SelectBox>
      <ArrowWrapper style={tw``}>
        <Arrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </Arrow>
      </ArrowWrapper>
    </SelectWrapper>
  );
};

export default Select;
