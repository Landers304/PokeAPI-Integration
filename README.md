# PokeAPI Integration Project

## Project Description

This project is a web application that integrates with the **PokeAPI** to display information about Pokémon. Users can:
- **Search Pokémon** by name or ID.
- **Build a team** of their favorite Pokémon.
- **Simulate battles** between Pokémon teams.

The application provides an interactive, user-friendly interface for exploring Pokémon data, creating teams, and battling them. It includes various pages like:
- **Homepage**: A general overview of the project and options to navigate to different sections.
- **Search Page**: Search and view detailed information about specific Pokémon.
- **Team Builder**: Create and manage a team of six Pokémon.
- **Battle Simulator**: Simulate battles between Pokémon teams.

## Features

- **Search Pokémon**: Allows users to search for Pokémon by name or ID, displaying detailed information like type, abilities, and stats.
- **Team Builder**: A drag-and-drop interface to select and build a team of up to six Pokémon.
- **Battle Simulator**: Simulate battles between teams, displaying a result based on Pokémon stats.
- **Responsive Design**: The application is fully responsive, providing a smooth experience on both desktop and mobile devices.
- **Dark Mode**: Toggle dark mode for a better viewing experience in low-light environments.

## Installation

To get started with this project, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/pokeapi-integration.git
```

### 2. Navigate to the project directory:

```bash
cd pokeapi-integration
```

### 3. Open the `index.html` file in your browser.

No additional dependencies are required, as the project uses only vanilla HTML, CSS, and JavaScript. The PokeAPI is used for fetching Pokémon data.

## File Structure

Here is an overview of the file structure:

```
pokeapi-integration/
│
├── index.html                  # Homepage
├── SearchPage.html             # Search for Pokémon
├── TeamBuilderPage.html        # Build your team
├── BattleSimulatorPage.html    # Simulate battles
├── PokeStyles.css              # Main CSS styles
├── main.js                     # JavaScript for the homepage
├── SearchPage.js               # JavaScript for the search page
├── TeamBuilder.js              # JavaScript for the team builder
├── BattleSimulator.js          # JavaScript for battle simulator
└── assets/
    └── images/                 # Store any images for the project (optional)
```

## Usage

### Homepage:
- The homepage introduces the project and provides links to the three main features: **Search Pokémon**, **Team Builder**, and **Battle Simulator**.

### Search Page:
- You can search for any Pokémon by name or ID. The search result will display detailed information, including its types, stats, and abilities.

### Team Builder:
- In the **Team Builder**, you can search for Pokémon, and drag-and-drop them to create a team of six Pokémon. The team can be managed, and you can replace any Pokémon in the team.

### Battle Simulator:
- In the **Battle Simulator**, you can simulate battles between two teams. The result of the battle is displayed based on the stats of the Pokémon in each team.

## Technologies Used

- **HTML**: Used for the structure of the website.
- **CSS**: For styling the page, including the responsive design and dark mode.
- **JavaScript**: Handles user interaction, API calls to PokeAPI, and dynamically updates the webpage.
- **PokeAPI**: The external API used to fetch Pokémon data for searching and team building.
