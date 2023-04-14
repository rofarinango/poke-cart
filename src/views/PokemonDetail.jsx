import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import apiCalls from "../api";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


const PokemonDetail = () => {
  const { pokemon } = useParams();
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    apiCalls.getPokemonByName({ name: pokemon })
      .then(pokemon => setPokemonData(pokemon))
      .catch(console.error);
  }, [pokemon]);

  return (
    <Container>
      <h2>{pokemonData?.name}</h2>
      <img src={pokemonData?.imgURL} alt={pokemonData?.name} />
      {/* other details about the pokemon */}
    </Container>
  );
}

export default PokemonDetail;