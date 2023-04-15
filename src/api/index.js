// get all
const getAllPokemons = async() => {
    const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

    return fetch(apiURL)
            .then(res => res.json())
            .then(response => {
                const {results} = response;
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
                const {name,sprites, types, weight, stats} = response;
                const primalType = types[0].type.name
                const {front_default} = sprites.other.home;
                const hp = stats[0].base_stat;
                const attack = stats[1].base_stat;
                const defense = stats[2].base_stat;
                const special_attack = stats[3].base_stat;
                const special_defense = stats[4].base_stat;
                const speed = stats[5].base_stat;
                const pokemon = {
                    name: name.charAt(0).toUpperCase() + name.slice(1), 
                    imgURL: front_default, 
                    type: primalType.charAt(0).toUpperCase() + primalType.slice(1),
                    weight: weight,
                    stats: {
                        hp: hp,
                        attack: attack,
                        defense: defense,
                        special_attack: special_attack,
                        special_defense: special_defense,
                        speed: speed
                    }
                };
                return pokemon;
            });
}

const apiCalls = {
    getAllPokemons,
    getPokemonByName
}

export default apiCalls;