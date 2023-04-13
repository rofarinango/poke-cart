import { useEffect, useState } from 'react';
import apiCalls from "../api";
import styled from 'styled-components';

const PokeCardContainer = styled.div`
  width: 200px;
  height: 300px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    margin-top: 10px;
    margin-bottom: 5px;
  }

  img {
    max-width: 100%;
    max-height: 80%;
  }
`;
export function PokeCard({name}){
    const [pokemon, setPokemon] = useState({});
    

    useEffect(function(){
        apiCalls.getPokemonByName({name})
            .then(pokemon => {
                setPokemon(pokemon);
            });
    }, [name]);
    

    return(
        <>
             <PokeCardContainer>
                <h3>{pokemon.name}</h3>
                <img src={pokemon.imgURL} alt={pokemon.name} />
                <h3>{pokemon.type}</h3>
            </PokeCardContainer>
        </>
    )
}