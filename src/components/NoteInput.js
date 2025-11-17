import React, { useState } from "react";
import { socket } from "../Socket";

export default function NoteInput({ roomId }) {
  const [text, setText] = useState("");

  const send = () => {
    if (!text) return;
    const note = { id: Date.now(), text, ts: new Date().toISOString() };
    socket.emit("send_note", { roomId, note });
    setText("");
  };

  return (
    <div style={{ marginTop: 16 }}>
      <textarea
        rows={3}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your note..."
        style={{ width: "100%", padding: 8 }}
      />
      <div style={{ textAlign: "right", marginTop: 8 }}>
        <button onClick={send} style={{ padding: "6px 12px" }}>
          Send
        </button>
      </div>
    </div>
  );
}
