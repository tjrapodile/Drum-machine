# React + Vite Drum-machine project
A React-based drum machine application built as part of a freeCodeCamp course certification.
This app allows users to play different drum sounds by interacting with the buttons on the interface or by pressing specific keys on their keyboard.
The project was developed to meet specific user stories and to pass all provided tests.

Features:
Outer Container-The entire drum machine is wrapped in an outer container with the id drum-machine, which contains all other elements.
Display Area- The app includes a display area with the ID display, which shows the name of the audio clip currently being played.
Drum Pads- The drum machine consists of 9 clickable drum pad elements, each with a class name of drum-pad, and a unique id corresponding to the audio clip it triggers.
The pads are labeled with the following keyboard keys: Q, W, E, A, S, D, Z, X, and C. These keys also trigger the corresponding audio clips when pressed.
Audio Elements-Each drum pad contains an HTML5 audio element with a src attribute pointing to an audio clip and an id corresponding to the label on the drum pad (e.g., id="Q", id="W", etc.).
Keyboard Control-Users can trigger each drum pad by pressing the corresponding key on their keyboard, with the associated sound being played.
Sound Display- When a drum pad is triggered (either by clicking or pressing the corresponding key), the name of the audio clip is displayed in the display element.


Technologies Used:
React- The frontend framework used to build the interactive components of the drum machine.
HTML & CSS- For structuring the application and styling the user interface.
JavaScript- To handle the logic for playing sounds, managing keyboard interactions, and updating the display area.

How to Use:
Play Sounds- Click on any drum pad or press the corresponding key on your keyboard (Q, W, E, A, S, D, Z, X, C) to play the associated sound.
Display Sounds- The name of the sound being played will be shown in the display area.

Clone the repository to your local machine using:
git clone https://github.com/tjrapodile/Drum-machine.git

Navigate to the project directory:
cd drum-machine

Install the necessary dependencies:
npm install

Start the application:
npm run dev


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

