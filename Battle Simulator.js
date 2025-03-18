document.getElementById('simulate-battle').addEventListener('click', () => {
    const pokemon1Name = document.getElementById('pokemon1').value.toLowerCase();
    const pokemon2Name = document.getElementById('pokemon2').value.toLowerCase();
    
    Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon1Name}`).then(res => res.json()),
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon2Name}`).then(res => res.json())
    ])
    .then(([pokemon1, pokemon2]) => {
        const battleResult = Math.random() < 0.5 ? pokemon1.name : pokemon2.name;
        document.getElementById('battle-result').innerHTML = `The winner is: ${battleResult}!`;
    })
    .catch(() => {
        alert('Error with one of the Pokémon!');
    });
});