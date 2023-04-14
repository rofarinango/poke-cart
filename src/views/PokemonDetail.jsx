import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import apiCalls from "../api";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

const PokemonImage = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 16px;
`;

const AddButton = styled.button`
  background-color: #ff6600;
  color: #fff;
  font-size: 1rem;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ff8533;
  }
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
      {pokemonData && (
        <Card>
          <h2>{pokemonData.name}</h2>
          <PokemonImage src={pokemonData.imgURL} alt={pokemonData.name} />
          <div>Type: {pokemonData.type}</div>
          <div>Weight: {pokemonData.weight}</div>
          <div>Hp: {pokemonData.stats.hp}</div>
          <div>Attack: {pokemonData.stats.attack}</div>
          <div>Defense: {pokemonData.stats.defense}</div>
          <div>Special Attack: {pokemonData.stats.special_attack}</div>
          <div>Special Defense: {pokemonData.stats.defense}</div>
          <div>Speed: {pokemonData.stats.defense}</div>
        </Card>
      )}
      <AddButton>Add to Collection</AddButton>
    </Container>
  );
}

export default PokemonDetail;