import React, { useEffect, useState } from "react";
import { socket } from "../Socket";

export default function NoteList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // receive real-time notes
    const handler = (note) => setNotes((prev) => [...prev, note]);
    socket.on("receive_note", handler);
    return () => socket.off("receive_note", handler);
  }, []);

  return (
    <div style={{ marginTop: 16 }}>
      <h3>Notes</h3>
      <div style={{ display: "grid", gap: 8 }}>
        {notes.map((n) => (
          <div key={n.id} style={{ background: "#f7f7f7", padding: 8, borderRadius: 6 }}>
            <div>{n.text}</div>
            <small style={{ color: "#666" }}>{new Date(n.ts).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
