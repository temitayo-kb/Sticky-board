// This Board component holds all sticky notes and lets you add new ones.
// It uses React state to store notes and a button to create them.
// Each note is passed to the StickyNote component.

import React, { useState } from "react";
import StickyNote from "./StickyNote";
import { v4 as uuidv4 } from "uuid";

function Board() {
  const [notes, setNotes] = useState([]);

  // This function adds a new empty note with a unique ID and default color.
  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      text: "",
      color: "#ffff88", // Default yellow color
      position: { x: 50, y: 50 }, // Starting position
    };
    setNotes([...notes, newNote]);
  };

  // This updates a note's text, color, or position when changed.
  const updateNote = (id, updatedFields) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, ...updatedFields } : note
      )
    );
  };

  // This removes a note by its ID.
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="board">
      <button onClick={addNote} className="add-button">
        <i className="bi bi-plus-circle"></i> Add Note
      </button>
      {notes.map((note) => (
        <StickyNote
          key={note.id}
          note={note}
          onUpdate={updateNote}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
}

export default Board;
