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
