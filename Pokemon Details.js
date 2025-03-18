const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('id');

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(response => response.json())
    .then(data => {
        const detailsContainer = document.getElementById('pokemon-details');
        detailsContainer.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <h3>Types</h3>
            <p>${data.types.map(type => type.type.name).join(', ')}</p>
            <h3>Abilities</h3>
            <p>${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
            <h3>Moves</h3>
            <p>${data.moves.map(move => move.move.name).slice(0, 10).join(', ')}</p>
        `;
    });