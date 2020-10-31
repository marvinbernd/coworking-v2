import React from 'react';
import { getSpace } from '../services/spaces';
import Container from './common/container';
import tw from 'twin.macro';

const SpaceDetail = ({ match }) => {
  const space = getSpace(match.params.id);
  return (
    <Container>
      <h1 style={tw`text-3xl`}>Space #{space._id}</h1>
      <h2 style={tw`text-3xl font-bold`}>{space.name}</h2>
    </Container>
  );
};

export default SpaceDetail;
