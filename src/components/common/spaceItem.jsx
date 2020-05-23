import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import tw from "twin.macro";
import placeholder from "../../assets/images/placeholder.jpg";
import Button from "./button";

const Image = styled.img`
  ${tw`w-full`}
`;

const SpaceItem = ({ space, onItemClick }) => {
  return (
    <div onClick={() => onItemClick(space.position)}>
      <Image src={placeholder} alt="Placeholder" style={tw`mb-2`} />
      <h3 style={tw`text-xl font-bold`}>{space.name}</h3>
      <p style={tw`text-sm leading-snug mb-3`}>{space.description}</p>
      <Link to={`/spaces/${space._id}`}>
        <Button>Zum Space</Button>
      </Link>
    </div>
  );
};

export default SpaceItem;
