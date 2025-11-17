import React, { useState } from "react";
import { socket } from "../socket";

export default function NoteInput() {
  const [text, setText] = useState("");

  const send = () => {
    const payload = {
      id: Date.now().toString(),
      text,
      ts: new Date().toISOString()
    };
    socket.emit("send_note", payload);
    setText("");
  };

  return (
    <div style={{ background: "#fff", padding: 12, borderRadius: 8 }}>
      <textarea
        rows={3}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", padding: 8 }}
        placeholder="Type or paste text/links here..."
      />
      <div style={{ textAlign: "right", marginTop: 8 }}>
        <button onClick={send} style={{ padding: "8px 12px" }}>Send</button>
      </div>
    </div>
  );
}
