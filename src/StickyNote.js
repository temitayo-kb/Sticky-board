// This StickyNote component shows one sticky note.
// It lets you drag, edit text, change color, and delete the note.
// I used react-draggable with a ref to make it work with React 18.

import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import { ChromePicker } from "react-color";

function StickyNote({ note, onUpdate, onDelete }) {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const nodeRef = useRef(null); // This helps Draggable work without findDOMNode.

  // This updates the note's text when you type.
  const handleTextChange = (e) => {
    onUpdate(note.id, { text: e.target.value });
  };

  // This updates the note's color when you pick one.
  const handleColorChange = (color) => {
    onUpdate(note.id, { color: color.hex });
  };

  // This updates the note's position when you drag it.
  const handleDrag = (e, data) => {
    onUpdate(note.id, { position: { x: data.x, y: data.y } });
  };

  return (
    <Draggable
      nodeRef={nodeRef} // Pass the ref to Draggable.
      defaultPosition={note.position}
      onStop={handleDrag}
    >
      <div
        ref={nodeRef} // Attach the ref to the DOM element.
        className="sticky-note"
        style={{ backgroundColor: note.color }}
      >
        <textarea
          value={note.text}
          onChange={handleTextChange}
          placeholder="Type here..."
        />
        <div className="note-controls">
          <button
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="color-button"
          >
            <i className="bi bi-palette"></i>
          </button>
          <button onClick={() => onDelete(note.id)} className="delete-button">
            <i className="bi bi-trash"></i>
          </button>
        </div>
        {showColorPicker && (
          <div className="color-picker">
            <ChromePicker
              color={note.color}
              onChangeComplete={handleColorChange}
            />
          </div>
        )}
      </div>
    </Draggable>
  );
}

export default StickyNote;
