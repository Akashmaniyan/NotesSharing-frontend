import React, { useState } from "react";
import { socket } from "../Socket";

export const NoteInput = ({ roomId }) => {
  const [text, setText] = useState("");

  const sendNote = () => {
    if (!text) return;
    const note = { text, ts: new Date() };
    socket.emit("send_note", { roomId, note });
    setText("");
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "5px", fontSize: "16px", width: "300px" }}
      />
      <button
        onClick={sendNote}
        style={{ marginLeft: "10px", padding: "5px 10px", fontSize: "16px" }}
      >
        Send
      </button>
    </div>
  );
};
