const pokemonContainer = document.querySelector(".pokemon-container");

function fetchPokemon(id) {
    fetch('https://pokeapi.co/api/v2/ability/${id}/')
    .then ((res) => res .json())
    .then((data) => console.log(data));
}

fetchPokemon(1);
