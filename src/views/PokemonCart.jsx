import { PokeCard } from "../components/PokeCard";
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px;
  gap: 10px;
  max-width: 1080px;
  margin: 0 auto;
`;


const PokemonCart = ({collection}) => {
    const pokemonNames = collection.map(name => name.toLowerCase());

    return(
        <div>
           <CardContainer>
            {pokemonNames.map((singlePokemon) => (
                <PokeCard
                    name={singlePokemon}
                    key={singlePokemon}
                ></PokeCard>
            ))}
            </CardContainer>
        </div>
    )
}

export default PokemonCart;