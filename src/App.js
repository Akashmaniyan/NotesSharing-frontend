
import React, { useState } from "react";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import { socket } from "./Socket";

function App() {
  const [roomId, setRoomId] = useState("");
  const [joined, setJoined] = useState(false);

  const joinRoom = () => {
    if (roomId.trim() === "") return;
    socket.emit("join_room", roomId);
    setJoined(true);
  };

  return (
    <div style={{ padding: 20, fontFamily: "system-ui, Arial" }}>
      <h1> Clipboard Sharing</h1>

      {!joined ? (
        <div>
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Enter 6-digit Room ID"
            style={{ padding: 8, fontSize: 16 }}
          />
          <button onClick={joinRoom} style={{ marginLeft: 8, padding: 8 }}>
            Connect
          </button>
        </div>
      ) : (
        <div>
          <p>Connected to room: {roomId}</p>
          <NoteInput roomId={roomId} />
          <NoteList roomId={roomId} />
        </div>
      )}
    </div>
  );
}

export default App;
