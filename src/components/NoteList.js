import React, { useState, useEffect } from "react";
import { socket } from "../Socket";

export const NoteList = ({ roomId }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    socket.on("existing_notes", (existingNotes) => setNotes(existingNotes));
    socket.on("receive_note", (note) => setNotes((prev) => [...prev, note]));
    socket.on("update_notes", (updatedNotes) => setNotes(updatedNotes));

    return () => {
      socket.off("existing_notes");
      socket.off("receive_note");
      socket.off("update_notes");
    };
  }, [roomId]);

  const deleteNote = (index) => {
    socket.emit("delete_note", { roomId, index });
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {notes.map((note, i) => (
        <div
          key={i}
          style={{
            padding: "10px",
            background: "#fffa91",
            borderRadius: "8px",
            minWidth: "150px",
            position: "relative",
          }}
        >
          <span>{note.text}</span>
          <div style={{ fontSize: "10px", marginTop: "5px" }}>
            {new Date(note.ts).toLocaleTimeString()}
          </div>
          <button
            onClick={() => deleteNote(i)}
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              cursor: "pointer",
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};
