// get all
const getAllPokemons = async() => {
    const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

    return fetch(apiURL)
            .then(res => res.json())
            .then(response => {
                const {results} = response;
                console.log(response)
                const pokemons = results.map(pokemon => {
                    const {name} = pokemon;
                    return {name};
                });
                return pokemons;
            });
}

const getPokemonByName = async({name}) => {
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${name}`;

    return fetch(apiURL)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                const {name,sprites, types} = response;
                console.log(types[0].type.name)
                const primalType = types[0].type.name
                const {front_default} = sprites.other.home;
                const pokemon = {name: name, imgURL: front_default, type: primalType};
                return pokemon;
            });
}

const apiCalls = {
    getAllPokemons,
    getPokemonByName
}

export default apiCalls;