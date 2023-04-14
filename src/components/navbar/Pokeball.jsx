import React from 'react';
import styled from 'styled-components';
import pokeball from '../../pokeball.png';

const PokeballIcon = styled.img`
  width: 40px;
`;

const CollectionSize = styled.span`
  position: absolute;
  bottom: -5px;
  left: -5px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  color: white;
  background-color: navy;
  border-radius: 50%;
  padding: 0;
  margin: 0;
`;


const Pokeball = ({ collectionSize }) => {
  return (
    <>
        <PokeballIcon src={pokeball} alt="pokeball icon" />
        <CollectionSize>{collectionSize}</CollectionSize>
    </>
      
  );
};

export default Pokeball;