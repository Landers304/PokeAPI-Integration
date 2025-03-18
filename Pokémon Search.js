document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
        .then(response => response.json())
        .then(data => {
            const pokemonInfo = document.getElementById('pokemon-info');
            pokemonInfo.innerHTML = `
                <h2>${data.name}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>Type: ${data.types.map(type => type.type.name).join(', ')}</p>
                <p>Abilities: ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
                <a href="details.html?id=${data.id}">More details</a>
            `;
        })
        .catch(err => {
            alert('Pokémon not found');
        });
});