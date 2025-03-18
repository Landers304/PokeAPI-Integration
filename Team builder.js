document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("team-search-input");
    const searchButton = document.getElementById("team-search-button");
    const teamContainer = document.getElementById("team-container");
    const teamList = document.getElementById("team-list");

    let team = []; // Stores the selected Pokémon

    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        if (searchTerm === "") {
            alert("Please enter a Pokémon name or ID.");
            return;
        }

        if (team.length >= 6) {
            alert("You can only have 6 Pokémon in your team!");
            return;
        }

        console.log(`Searching for: ${searchTerm}`); // Debugging log

        fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Pokémon not found.");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Pokemon data:", data); // Debugging log
                addPokemonToTeam(data);
            })
            .catch((error) => {
                console.error("Error fetching Pokémon:", error); // Debugging log
                alert(error.message);
            });
    });

    function addPokemonToTeam(pokemon) {
        if (team.some(p => p.id === pokemon.id)) {
            alert(`${pokemon.name.toUpperCase()} is already in your team!`);
            return;
        }

        team.push(pokemon);
        updateTeamDisplay();
    }

    function updateTeamDisplay() {
        teamList.innerHTML = ""; // Clear previous list

        team.forEach((pokemon, index) => {
            const listItem = document.createElement("div");
            listItem.classList.add("team-card");
            listItem.innerHTML = `
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <p>${pokemon.name.toUpperCase()}</p>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;
            teamList.appendChild(listItem);
        });

        // Attach event listeners to remove buttons
        document.querySelectorAll(".remove-btn").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                team.splice(index, 1); // Remove from array
                updateTeamDisplay(); // Update UI
            });
        });
    }
});