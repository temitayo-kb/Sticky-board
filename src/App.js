// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// This is the main App component that sets up the bulletin board.
// It uses the Board component to show sticky notes.

import React from "react";
import Board from "./Board";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <h1>My Sticky Board</h1>
        <Board />
      </div>
    </ErrorBoundary>
  );
}

export default App;
