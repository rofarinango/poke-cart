import { useState, useEffect, useRef } from "react";
import apiCalls from "../api";
import { PokeCard } from "../components/PokeCard";
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 20px;
  max-width: 1080px;
  margin: 0 auto;
`;


const PokemonMarket = () => {
    const [pokemons, setPokemons] = useState([]);
    const calledAPI = useRef(false);

    useEffect(()=>{
        if(!calledAPI.current){
            calledAPI.current = true;
            apiCalls.getAllPokemons().then(pokemons => {
                setPokemons(pokemons);
            }).catch(console.error);
        }
    }, [])
    return(
        <div>
           <CardContainer>
            {pokemons.map((singlePokemon) => (
                <PokeCard name={singlePokemon.name}></PokeCard>
            ))}
            </CardContainer>
        </div>
    )
}

export default PokemonMarket;