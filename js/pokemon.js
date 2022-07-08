


// fetch("https://pokeapi.co/api/v2/pokemon")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         data.results.map(pokemonInfo => {
//             console.log(pokemonInfo.url)
//         })
// })

const { get } = require("http");

const pokemon_number = 150

const getAllPokemon = async () => {
    for (let i = 0; i < pokemon_number; i++){
        await getPokemon(i)
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
}

