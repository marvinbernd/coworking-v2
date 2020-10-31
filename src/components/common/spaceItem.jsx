import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import placeholder from '../../assets/images/placeholder.jpg';
import Button from './button';

const Image = styled.img`
  ${tw`w-full`}
`;

const SpaceItem = ({ space, onItemClick }) => {
  return (
    <div
      style={tw`flex flex-col justify-between`}
      onClick={() => onItemClick(space.position)}
    >
      <div>
        <Image src={placeholder} alt="Placeholder" style={tw`mb-2`} />
        <h3 style={tw`text-xl font-bold`}>{space.name}</h3>
        <p style={tw`text-sm leading-snug mb-3`}>{space.description}</p>
        <div
          style={tw`grid grid-cols-2 gap-1 mb-3 text-sm font-bold text-gray-700`}
        >
          {space.keywords.map((keyword) => (
            <div key={keyword._id}>{keyword.name}</div>
          ))}
        </div>
      </div>
      <div>
        <Link to={`/spaces/${space._id}`}>
          <Button>Zum Space</Button>
        </Link>
      </div>
    </div>
  );
};

export default SpaceItem;
