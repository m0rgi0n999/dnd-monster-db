# Dungeons & Dragons Monsters Database

This project is a web application for managing a database of 3rd edition Dungeons & Dragons monsters. Users can add, view, and delete monsters from the database through a user-friendly interface.

## Project Structure

- **public/**: Contains static files for the website.
  - **index.html**: The main HTML document.
  - **styles/**: Contains CSS files for styling the website.
    - **main.css**: The main stylesheet for the application.

- **src/**: Contains the source code for the application.
  - **app.js**: The entry point of the application.
  - **components/**: Contains React components.
    - **MonsterForm.js**: Component for adding new monsters.
  - **services/**: Contains API interaction functions.
    - **api.js**: Functions for fetching and managing monster data.
  - **utils/**: Contains utility functions.
    - **helpers.js**: Common helper functions for the application.

- **package.json**: Configuration file for npm, listing dependencies and scripts.

- **.gitignore**: Specifies files and directories to be ignored by Git.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd dnd-monsters-db
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

## Usage

- Use the MonsterForm component to add new monsters to the database.
- The application allows you to view and manage the list of monsters.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.