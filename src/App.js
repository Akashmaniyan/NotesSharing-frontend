import React, { useState } from "react";
import { NoteInput } from "./components/NoteInput";
import { NoteList } from "./components/NoteList";
import { socket } from "./Socket";

function App() {
  const [roomId, setRoomId] = useState("");
  const [joined, setJoined] = useState(false);

  const joinRoom = () => {
    if (!roomId) return;
    socket.emit("join_room", roomId);
    setJoined(true);
  };

  const clearNotes = () => {
    if (!roomId) return;
    socket.emit("clear_notes", roomId);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {!joined ? (
        <div>
          <h2>Enter Room ID</h2>
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            style={{ padding: "5px", fontSize: "16px" }}
          />
          <button
            onClick={joinRoom}
            style={{ marginLeft: "10px", padding: "5px 10px", fontSize: "16px" }}
          >
            Connect
          </button>
        </div>
      ) : (
        <div>
          <h2>Room: {roomId}</h2>
          <button
            onClick={clearNotes}
            style={{ marginBottom: "10px", padding: "5px 10px", color: "white", background: "red", border: "none", borderRadius: "4px" }}
          >
            Clear All Notes
          </button>
          <NoteInput roomId={roomId} />
          <NoteList roomId={roomId} />
        </div>
      )}
    </div>
  );
}

export default App;
